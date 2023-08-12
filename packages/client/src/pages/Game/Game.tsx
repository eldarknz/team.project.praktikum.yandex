import { useEffect, useRef, useState } from 'react';
import GameView from './view/GameView';
import { useLocation, useNavigate } from 'react-router-dom';
import { GameLogic } from '@core/GameLogic/GameLogic';
import { fullscreenHandler } from '@utils/fullscreen';
import { GetViewerResponse } from '@api/ViewerAPI';
import { useControllers } from '@core/ControllersContext';
import { gameControlHandler } from '@utils/gameControl';
import { useAppSelector } from '@core/StoreContext';

export const GAME_GRAVITY = 1.7;
const HEADER_HEIGHT = 120;

export const GamePage = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<GameLogic | null>(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const viewer = useAppSelector(store => store.user.user);
  const controllers = useControllers();

  useEffect(() => {
    if (ref.current) {
      ref.current.width = window.innerWidth;
      ref.current.height = window.innerHeight - HEADER_HEIGHT;
      const logic = new GameLogic({
        level: state?.level || sessionStorage.getItem('level') || 'first',
        canvas: ref.current,
        context: ref.current.getContext('2d')!,
        navigate,
        viewer: viewer as GetViewerResponse,
        controllers: controllers,
      });
      setGame(logic);
      logic.init();
      logic.animate();
    }
  }, [ref.current]);

  useEffect(() => {
    const keyEventsHandler = gameControlHandler(game);
    if (game) {
      window.addEventListener('keydown', keyEventsHandler);
      window.addEventListener('keyup', keyEventsHandler);
    }
    return () => {
      if (game) {
        window.removeEventListener('keydown', keyEventsHandler);
        window.removeEventListener('keyup', keyEventsHandler);
      }
    };
  }, [game]);

  useEffect(() => {
    if (ref) {
      const keydownHandler = fullscreenHandler(ref.current);
      window.addEventListener('keydown', keydownHandler);

      return () => {
        window.removeEventListener('keydown', keydownHandler);
      };
    }
  }, [ref]);

  return <GameView canvasRef={ref} />;
};
