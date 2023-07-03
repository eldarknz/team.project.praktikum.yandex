import { useCallback, useState } from 'react';
import StartView from './view/StartView';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@routers/routes';
import {
  levelList,
  LevelListType,
} from '@core/GameLogic/getLevel';

export default function Start() {
  const [active, setActive] = useState(
    levelList.find(
      l =>
        l.id === sessionStorage.getItem('level')
    ) || levelList[0]
  );
  const navigate = useNavigate();
  const handleStart = useCallback(() => {
    navigate(ROUTES.Game.Game.path, {
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
      list={levelList}
    />
  );
}
