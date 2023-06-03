import GenericObjectImpl from '@core/GenericObject/GenericObjectImpl';
import PlayerImpl from '@core/Player/PlayerImpl';
import { Keys } from '@pages/Game/types';
import createImage from '../../utils/createImage';
import platformSrc from '@assets/png/platform.png';
import hillsSrc from '@assets/png/hills.png';
import diamandSrc from '@assets/png/diamand.png';
import smPlatformSrc from '@assets/png/platformSmallTall.png';
import { getMovePlayerCondition } from '../../utils/getMovePlayerCondition';
import { ROUTES } from '@routers/routes';
import { NavigateFunction } from 'react-router-dom';

const platform = createImage(platformSrc);
const hills = createImage(hillsSrc);
const smPlatform = createImage(smPlatformSrc);
const diamand = createImage(diamandSrc);
diamand.width = 50;

export type GameLogicProps = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  navigate: NavigateFunction;
};

export class GameLogic {
  id = 0;
  scrollOffset = 0;
  currentKey = '';
  navigate: NavigateFunction;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  player: PlayerImpl | undefined;
  platforms: GenericObjectImpl[] = [];
  genericObjects: GenericObjectImpl[] = [];
  keys: Keys = {
    right: {
      presed: false,
    },
    left: {
      presed: false,
    },
  };
  constructor({
    canvas,
    context,
    navigate,
  }: GameLogicProps) {
    this.canvas = canvas;
    this.context = context;
    this.player = undefined;
    this.navigate = navigate;
  }

  init = () => {
    {
      this.player = new PlayerImpl({
        scrollOffset: this.scrollOffset,
        canvas: this.canvas,
        context: this.context,
      });
      this.platforms = [
        new GenericObjectImpl({
          context: this.context,
          x: 0,
          y: this.canvas.height - 60,
          image: platform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 1000,
          y: this.canvas.height - 240,
          image: smPlatform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 1000,
          y: this.canvas.height - 60,
          image: platform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 1500,
          y: this.canvas.height - 400,
          image: platform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 2200,
          y: this.canvas.height - 400,
          image: platform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 3200,
          y: this.canvas.height - 60,
          image: platform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 4000,
          y: this.canvas.height - 200,
          image: smPlatform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 4400,
          y: this.canvas.height - 400,
          image: smPlatform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 4800,
          y: this.canvas.height - 600,
          image: smPlatform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 5089,
          y: this.canvas.height - 600,
          image: platform,
        }),
        new GenericObjectImpl({
          context: this.context,
          x: 5450,
          y: this.canvas.height - 750,
          image: diamand,
        }),
      ];
      this.genericObjects = [
        new GenericObjectImpl({
          context: this.context,
          x: -1,
          y:
            this.canvas.height -
            hills.height +
            20,
          image: hills,
        }),
      ];
    }
  };

  animate = () => {
    if (!this.player) {
      return;
    }
    this.id = window.requestAnimationFrame(
      this.animate
    );
    this.context.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    this.genericObjects.forEach(genericObject => {
      genericObject.draw();
    });
    this.platforms.forEach(platform =>
      platform.draw()
    );
    this.player.update();
    this.player.velocity.x = this.keys.right
      .presed
      ? 5
      : this.keys.left.presed
      ? -5
      : 0;

    if (
      this.keys.right.presed &&
      this.player.position.x <= 400
    ) {
      this.player.velocity.x = this.player.speed;
    } else if (
      (this.keys.left.presed &&
        this.player.position.x > 100) ||
      (this.keys.left.presed &&
        this.scrollOffset === 0 &&
        this.player.position.x > 0)
    ) {
      this.player.velocity.x = -this.player.speed;
    } else {
      this.player.velocity.x = 0;
      this.scrollOffset = this.keys.right.presed
        ? this.scrollOffset + this.player.speed
        : this.keys.left.presed &&
          this.scrollOffset > 0
        ? this.scrollOffset - this.player.speed
        : this.scrollOffset;
      this.player.scrollOffset =
        this.scrollOffset;
      this.platforms.forEach(platform => {
        if (this.keys.right.presed) {
          platform.position.x -=
            this.player!.speed;
        } else if (
          this.keys.left.presed &&
          this.scrollOffset > 0
        ) {
          platform.position.x +=
            this.player!.speed;
        }
      });

      this.genericObjects.forEach(
        genericObject => {
          if (this.keys.right.presed) {
            genericObject.position.x -=
              this.player!.speed * 0.66;
          } else if (
            this.keys.left.presed &&
            this.scrollOffset > 0
          ) {
            genericObject.position.x +=
              this.player!.speed * 0.66;
          }
        }
      );
    }

    this.platforms.forEach(platform => {
      if (!this.player) {
        return;
      }
      const { player } = this;
      if (
        player.position.y + player.height <=
          platform.position.y &&
        player.position.y +
          player.height +
          player.velocity.y >=
          platform.position.y &&
        player.position.x + player.width >=
          platform.position.x &&
        player.position.x + player.width >=
          platform.position.x &&
        player.position.x <=
          platform.position.x + platform.width
      ) {
        this.player.velocity.y = 0;
      }
    });

    getMovePlayerCondition(
      this.keys,
      this.player,
      this.currentKey
    );
    if (this.scrollOffset > 5000) {
      this.cancelAnimate();
      this.navigate(`${ROUTES.End.path}?win=1`);
      this.init();
    }

    if (
      this.player.position.y >=
        this.canvas.height - this.player.height &&
      this.scrollOffset > 0
    ) {
      this.cancelAnimate();
      this.navigate(ROUTES.End.path);
      this.init();
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
        if (this.player) {
          this.player.velocity.y -= 20;
        }
        break;
      }
    }
  };

  cancelAnimate = () =>
    window.cancelAnimationFrame(this.id);
}
