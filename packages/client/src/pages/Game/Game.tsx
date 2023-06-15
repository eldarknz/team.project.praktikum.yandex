import {
  useEffect,
  useRef,
  useState,
} from 'react';
import GameView from './view/GameView';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { GameLogic } from '@core/GameLogic/GameLogic';

export const GAME_GRAVITY = 1.7;
const HEADER_HEIGHT = 120;

export const GamePage = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [game, setGame] =
    useState<GameLogic | null>(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (ref.current) {
      ref.current.width = window.innerWidth;
      ref.current.height =
        window.innerHeight - HEADER_HEIGHT;
      const logic = new GameLogic({
        level:
          state?.level ||
          sessionStorage.getItem('level') ||
          'first',
        canvas: ref.current,
        context: ref.current.getContext('2d')!,
        navigate,
      });
      setGame(logic);
      logic.init();
      logic.animate();
    }
  }, [ref.current]);

  useEffect(() => {
    if (game) {
      window.addEventListener(
        'keydown',
        game.keyDown
      );
      window.addEventListener(
        'keyup',
        game.keyUp
      );
    }
    return () => {
      if (game) {
        window.removeEventListener(
          'keydown',
          game.keyDown
        );
        window.removeEventListener(
          'keyup',
          game.keyUp
        );
      }
    };
  }, [game]);
  return <GameView canvasRef={ref} />;
};
