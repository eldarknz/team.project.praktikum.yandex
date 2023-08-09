import GenericObjectImpl from '@core/GenericObject/GenericObjectImpl';
import levelConfig, { Levels } from './levelsConfig';

export type LevelListType = {
  title: string;
  id: Levels;
};

export const levelList: LevelListType[] = [
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

export const getLevel = (context: CanvasRenderingContext2D, level: Levels, baseHeight: number) => {
  const config = new levelConfig(baseHeight);

  return {
    elements: config[level]().items.map(
      item =>
        new GenericObjectImpl({
          context,
          ...item,
        }),
    ),
    finishPoint: config[level]().finishPoint,
  };
};
