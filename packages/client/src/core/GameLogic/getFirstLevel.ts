import GenericObjectImpl from '@core/GenericObject/GenericObjectImpl';
import createImage from '../../utils/createImage';
import platformSrc from '@assets/png/platform.png';
import hillsSrc from '@assets/png/hills.png';
import diamandSrc from '@assets/png/diamand.png';
import smPlatformSrc from '@assets/png/platformSmallTall.png';

const platform = createImage(platformSrc);
const smPlatform = createImage(smPlatformSrc);
const diamand = createImage(diamandSrc);
const hills = createImage(hillsSrc);
export const getFirstLevel = (
  context: CanvasRenderingContext2D,
  baseHeight: number
) => {
  const platforms = [
    new GenericObjectImpl({
      context,
      x: 0,
      y: baseHeight - 60,
      image: platform,
    }),
    new GenericObjectImpl({
      context,
      x: 1000,
      y: baseHeight - 240,
      image: smPlatform,
    }),
    new GenericObjectImpl({
      context,
      x: 1000,
      y: baseHeight - 60,
      image: platform,
    }),
    new GenericObjectImpl({
      context,
      x: 1500,
      y: baseHeight - 400,
      image: platform,
    }),
    new GenericObjectImpl({
      context,
      x: 2200,
      y: baseHeight - 400,
      image: platform,
    }),
    new GenericObjectImpl({
      context,
      x: 3200,
      y: baseHeight - 60,
      image: platform,
    }),
    new GenericObjectImpl({
      context,
      x: 4000,
      y: baseHeight - 200,
      image: smPlatform,
    }),
    new GenericObjectImpl({
      context,
      x: 4400,
      y: baseHeight - 400,
      image: smPlatform,
    }),
    new GenericObjectImpl({
      context,
      x: 4800,
      y: baseHeight - 600,
      image: smPlatform,
    }),
    new GenericObjectImpl({
      context,
      x: 5089,
      y: baseHeight - 600,
      image: platform,
    }),
    new GenericObjectImpl({
      context,
      x: 5450,
      y: baseHeight - 750,
      image: diamand,
      type: 'finish',
    }),
  ];

  const decorationObjects = [
    new GenericObjectImpl({
      context,
      type: 'decoration',
      x: -1,
      y: baseHeight - hills.height + 20,
      image: hills,
      speedKoef: 0.66,
    }),
  ];
  const finishPoint = 5000;
  return {
    elements: [
      ...decorationObjects,
      ...platforms,
    ],
    finishPoint,
  };
};
