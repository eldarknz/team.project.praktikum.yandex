import { useCallback, useState } from 'react';
import StartView from './view/StartView';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@routers/routes';

//TODO: заменить на реальный конфиг уровней
const list = ['Первый', 'Второй'];

export default function Start() {
  const [active, setActive] = useState(list[0]);
  const navigate = useNavigate();
  const handleStart = useCallback(() => {
    navigate(ROUTES.Game.path);
  }, [navigate]);
  return (
    <StartView
      username="User"
      onStart={handleStart}
      active={active}
      setActive={setActive}
      list={list}
    />
  );
}
