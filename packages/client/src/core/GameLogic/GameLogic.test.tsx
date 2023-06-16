import 'jest-canvas-mock';
import { GameLogic } from './GameLogic';
import { Levels } from '@core/GameLogic/levelsConfig';
import PlayerImpl from '@core/Player/PlayerImpl';
import GenericObjectImpl from '@core/GenericObject/GenericObjectImpl';

describe('GameLogic', () => {
  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;
  let navigate: jest.Mock;
  let gameLogic: GameLogic;

  beforeEach(() => {
    canvas = document.createElement('canvas');
    context = canvas.getContext(
      '2d'
    ) as CanvasRenderingContext2D;
    navigate = jest.fn();
    const props = {
      canvas,
      context,
      navigate,
      level: 'second' as Levels,
    };
    gameLogic = new GameLogic(props);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('init', () => {
    it('should initialize game', () => {
      gameLogic.init();

      expect(gameLogic.player).toBeDefined();
      expect(
        gameLogic.genericObjects
      ).toBeDefined();
      expect(
        gameLogic.finishObject
      ).toBeDefined();
    });
  });

  describe('animate', () => {
    beforeEach(() => {
      gameLogic.player = new PlayerImpl({
        scrollOffset: 0,
        canvas,
        context,
      });
      gameLogic.keys = {
        left: { presed: false },
        right: { presed: false },
      };
      const contextStub: CanvasRenderingContext2D =
        {
          clearRect: jest.fn(),
        } as any;
      gameLogic.context = contextStub;
    });

    it('should update player velocity when right key is pressed', () => {
      gameLogic.keys.right.presed = true;
      gameLogic.animate();

      expect(gameLogic.player?.velocity.x).toBe(
        14
      );
    });

    it('should update player velocity when left key is pressed', () => {
      gameLogic.keys.left.presed = true;
      gameLogic.animate();

      expect(gameLogic.player?.velocity.x).toBe(
        -14
      );
    });

    it('should not update player velocity when no keys are pressed', () => {
      gameLogic.animate();

      expect(gameLogic.player?.velocity.x).toBe(
        0
      );
    });
  });

  describe('keyUp', () => {
    it('should handle key up event for left key', () => {
      const keyCode = 65; // "A" key
      gameLogic.keys.left.presed = true;

      gameLogic.keyUp({ keyCode });

      expect(gameLogic.keys.left.presed).toBe(
        false
      );
    });

    it('should handle key up event for right key', () => {
      const keyCode = 68; // "D" key
      gameLogic.keys.right.presed = true;

      gameLogic.keyUp({ keyCode });

      expect(gameLogic.keys.right.presed).toBe(
        false
      );
    });
  });

  describe('keyDown', () => {
    it('should handle key down event for left key', () => {
      const keyCode = 65; // "A" key

      gameLogic.keyDown({ keyCode });

      expect(gameLogic.keys.left.presed).toBe(
        true
      );
      expect(gameLogic.currentKey).toBe('left');
    });

    it('should handle key down event for right key', () => {
      const keyCode = 68; // "D" key

      gameLogic.keyDown({ keyCode });

      expect(gameLogic.keys.right.presed).toBe(
        true
      );
      expect(gameLogic.currentKey).toBe('right');
    });

    it('should handle key down event for jump key', () => {
      gameLogic.init();

      const keyCode = 87; // "W" key
      gameLogic.jump = 0;

      gameLogic.keyDown({ keyCode });

      expect(gameLogic.player?.velocity.y).toBe(
        -20
      );
      expect(gameLogic.jump).toBe(1);
    });
  });
});
