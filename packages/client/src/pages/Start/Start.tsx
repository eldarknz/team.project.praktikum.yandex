import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import StartView from './view/StartView';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@routers/routes';
import { Levels } from '@core/GameLogic/levelsConfig';

export type LevelListType = {
  title: string;
  id: Levels;
};

const list: LevelListType[] = [
  {
    title: 'Первый',
    id: 'first',
  },
  {
    title: 'Второй',
    id: 'second',
  },
  {
    title: 'Третий',
    id: 'third',
  },
];

export default function Start() {
  const [active, setActive] = useState(
    list.find(
      l =>
        l.id === sessionStorage.getItem('level')
    ) || list[0]
  );
  const navigate = useNavigate();
  const handleStart = useCallback(() => {
    navigate(ROUTES.Game.path, {
      state: { level: active.id },
    });
  }, [navigate, active]);

  const updateActive = useCallback(
    (act: LevelListType) => {
      document.body.dataset.level = act.id;
      sessionStorage.setItem('level', act.id);
      setActive(act);
    },
    []
  );
  return (
    <StartView
      username="User"
      onStart={handleStart}
      active={active}
      setActive={updateActive}
      list={list}
    />
  );
}
