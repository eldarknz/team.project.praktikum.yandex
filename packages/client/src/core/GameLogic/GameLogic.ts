import GenericObjectImpl from '@core/GenericObject/GenericObjectImpl';
import PlayerImpl from '@core/Player/PlayerImpl';
import { Keys } from '@pages/Game/types';
import { getMovePlayerCondition } from '../../utils/getMovePlayerCondition';
import { ROUTES } from '@routers/routes';
import { NavigateFunction } from 'react-router-dom';
import { getLevel } from './getLevel';
import { Levels } from './levelsConfig';
import { GetViewerResponse } from '@api/ViewerAPI';
import { ControllersModel } from '@core/ControllersContext';

export type GameLogicProps = {
  level: Levels;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  navigate: NavigateFunction;
  viewer: GetViewerResponse;
  controllers: ControllersModel;
};

const PLATFORM_SPEED = 5;
const MAX_LEFT_PLAYER_POSITION = 100;
const MAX_RIGHT_PLAYER_POSITION = 400;
const MAX_JUMP = 2;

export class GameLogic {
  startTime = 0;
  endTime = 0;
  score = 0;

  id = 0;
  scrollOffset = 0;
  jump = 0;
  level: Levels;
  currentKey = '';
  navigate: NavigateFunction;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  finishPoint: number | undefined;
  player: PlayerImpl | undefined;
  finishObject: GenericObjectImpl | undefined;
  genericObjects: GenericObjectImpl[] = [];
  keys: Keys = {
    right: {
      presed: false,
    },
    left: {
      presed: false,
    },
  };
  viewer: GetViewerResponse;
  controllers: ControllersModel;

  constructor({ canvas, level, context, navigate, viewer, controllers }: GameLogicProps) {
    this.canvas = canvas;
    this.context = context;
    this.player = undefined;
    this.navigate = navigate;
    this.level = level;
    this.viewer = viewer;
    this.controllers = controllers;
  }

  init = () => {
    this.startTime = Date.now();

    {
      this.player = new PlayerImpl({
        scrollOffset: this.scrollOffset,
        canvas: this.canvas,
        context: this.context,
      });
      const { elements, finishPoint } = getLevel(this.context, this.level, this.canvas.height);
      this.finishPoint = finishPoint;
      this.genericObjects = elements;
      this.finishObject = elements.find((i: GenericObjectImpl) => i.type === 'finish');
    }
  };

  animate = () => {
    if (!this.player) {
      return;
    }
    this._refreshAnim();
    this.genericObjects.forEach(genericObject => {
      genericObject.draw();
    });
    this.player.update();
    this.player.velocity.x = this.keys.right.presed
      ? PLATFORM_SPEED
      : this.keys.left.presed
      ? -PLATFORM_SPEED
      : 0;

    if (this.keys.right.presed && this.player.position.x <= MAX_RIGHT_PLAYER_POSITION) {
      this.player.velocity.x = this.player.speed;
    } else if (
      (this.keys.left.presed && this.player.position.x > MAX_LEFT_PLAYER_POSITION) ||
      (this.keys.left.presed && this.scrollOffset === 0 && this.player.position.x > 0)
    ) {
      this.player.velocity.x = -this.player.speed;
    } else {
      this.player.velocity.x = 0;
      this._updateLevelProgress();

      this.genericObjects.forEach(genericObject => this._moveObject(genericObject));
    }

    this.genericObjects
      .filter(i => i.type === 'platform')
      .forEach(platform => {
        if (!this.player) {
          return;
        }
        const { x, y } = platform.position;
        const { height, width, velocity, position } = this.player;
        if (
          position.y + height <= y &&
          position.y + height + velocity.y >= y &&
          position.x + width >= x &&
          position.x + width >= x &&
          position.x <= x + platform.width
        ) {
          velocity.y = 0;
        }
      });

    getMovePlayerCondition(this.keys, this.player, this.currentKey);
    if (this._getWinCondition()) {
      this.cancelAnimate();
      this.init();
      this.navigate(ROUTES.End.path, {
        state: { win: true, level: this.level },
      });
    }

    if (
      this.player.position.y >= this.canvas.height - this.player.height &&
      this.scrollOffset > 0
    ) {
      this.cancelAnimate();
      this.init();
      this.navigate(ROUTES.End.path, {
        state: { level: this.level },
      });
    }
  };
  //@typescript-eslint/no-explicit-any
  keyUp = ({ keyCode }: any) => {
    switch (keyCode) {
      case 65: {
        this.keys.left.presed = false;
        break;
      }
      case 68: {
        this.keys.right.presed = false;
        break;
      }
    }
  };
  //@typescript-eslint/no-explicit-any
  keyDown = ({ keyCode }: any) => {
    switch (keyCode) {
      case 65: {
        this.keys.left.presed = true;
        this.currentKey = 'left';
        break;
      }
      case 68: {
        this.keys.right.presed = true;
        this.currentKey = 'right';
        break;
      }
      case 87: {
        if (this.player && this.jump < MAX_JUMP) {
          this.player.velocity.y -= 20;
          this.jump += 1;
        } else {
          this.jump = 0;
        }
        break;
      }
    }
  };

  private _refreshAnim = () => {
    this.id = window.requestAnimationFrame(this.animate);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  private _updateLevelProgress = () => {
    if (!this.player) {
      return;
    }
    const { speed } = this.player;
    this.scrollOffset = this.keys.right.presed
      ? this.scrollOffset + speed
      : this.keys.left.presed && this.scrollOffset > 0
      ? this.scrollOffset - speed
      : this.scrollOffset;
    this.player.scrollOffset = this.scrollOffset;
  };

  private _getWinCondition = () => {
    const { player, finishObject, finishPoint, scrollOffset } = this;

    if (player && finishObject && finishPoint) {
      const rightFinishCrossing = scrollOffset <= finishPoint + finishObject.width;
      const leftFinishCrossing = scrollOffset > finishPoint;
      const bottomFinishCrossing =
        player.position.y <= finishObject.position.y + finishObject.height;
      const topFinishCrossing = player.position.y >= finishObject.position.y - player.height;

      if (leftFinishCrossing && bottomFinishCrossing && rightFinishCrossing && topFinishCrossing) {
        this.endTime = Date.now();

        const timeElapsed = this.endTime - this.startTime;
        // За каждые 10 секунд прохождения игры 1000 очков
        this.score = Math.floor(1000 * (10000 / timeElapsed));

        this.controllers.lead.addUser({
          data: {
            imgSrc: this.viewer.avatar || undefined,
            login: this.viewer.login || this.viewer.first_name || 'Неизвестный пользователь',
            teamwork_theTeam_score: this.score,
          },
        });

        return true;
      }

      return leftFinishCrossing && bottomFinishCrossing && rightFinishCrossing && topFinishCrossing;
    }

    return false;
  };

  private _moveObject = (item: GenericObjectImpl) => {
    if (this.keys.right.presed) {
      item.position.x -= this.player!.speed * item.speedKoef;
    } else if (this.keys.left.presed && this.scrollOffset > 0) {
      item.position.x += this.player!.speed * item.speedKoef;
    }
  };

  cancelAnimate = () => window.cancelAnimationFrame(this.id);
}
