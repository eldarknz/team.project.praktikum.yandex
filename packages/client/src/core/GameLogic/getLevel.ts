import GenericObjectImpl from '@core/GenericObject/GenericObjectImpl';
import {
  Levels,
  getConfig,
} from './levelsConfig';

export const getLevel = (
  context: CanvasRenderingContext2D,
  level: Levels,
  baseHeight: number
) => {
  const config = getConfig(baseHeight);

  return {
    elements: config[level]().items.map(
      item =>
        new GenericObjectImpl({
          context,
          ...item,
        })
    ),
    finishPoint: config[level]().finishPoint,
  };
};
