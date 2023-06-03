import { useCallback, useState } from 'react';
import StartView from './view/StartView';

//TODO: заменить на реальный конфиг уровней
const list = ['Первый', 'Второй'];

export default function Start() {
  const [active, setActive] = useState(list[0]);
  const handleStart = useCallback(() => {
    //TODO: написать обработчик когда будет делаться игра
  }, []);
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
