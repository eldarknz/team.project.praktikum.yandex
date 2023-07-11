import createImage from '@utils/createImage';
import diamandSrc from '@assets/png/diamand.png';
import { GenericObjectImplProps } from '@core/GenericObject/GenericObjectImpl';
import getImage from './getImage';

export type Levels = 'first' | 'second' | 'third';
export type LevelConfigItem = {
  id: string;
  finishPoint: number;
  items: Omit<GenericObjectImplProps, 'context'>[];
};
const diamand = createImage(diamandSrc);

export default class levelConfig {
  baseHeight: number;
  constructor(baseHeight: number) {
    this.baseHeight = baseHeight;
  }
  first = (): LevelConfigItem => {
    const { hills, platform, smPlatform } = this._getImage('1');
    const { baseHeight } = this;
    return {
      id: '1',
      finishPoint: 5000,
      items: [
        {
          type: 'decoration',
          x: -1,
          y: baseHeight - hills.height + 20,
          image: hills,
          speedKoef: 0.66,
        },
        {
          x: 0,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 1000,
          y: baseHeight - 240,
          image: smPlatform,
        },
        {
          x: 1000,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 1500,
          y: baseHeight - 400,
          image: platform,
        },
        {
          x: 2200,
          y: baseHeight - 400,
          image: platform,
        },
        {
          x: 3200,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 4000,
          y: baseHeight - 200,
          image: smPlatform,
        },
        {
          x: 4400,
          y: baseHeight - 400,
          image: smPlatform,
        },
        {
          x: 4800,
          y: baseHeight - 600,
          image: smPlatform,
        },
        {
          x: 5089,
          y: baseHeight - 600,
          image: platform,
        },
        {
          x: 5450,
          y: baseHeight - 750,
          image: diamand,
          type: 'finish',
        },
      ],
    };
  };
  second = (): LevelConfigItem => {
    const { hills, platform, smPlatform } = this._getImage('2');
    const { baseHeight } = this;
    return {
      id: '2',
      finishPoint: 5800,
      items: [
        {
          type: 'decoration',
          x: 300,
          y: baseHeight - hills.height + 20,
          image: hills,
          speedKoef: 0.66,
        },
        {
          x: 0,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 1000,
          y: baseHeight - 240,
          image: smPlatform,
        },
        {
          x: 1000,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 1500,
          y: baseHeight - 400,
          image: platform,
        },
        {
          x: 2200,
          y: baseHeight - 400,
          image: platform,
        },
        {
          x: 3200,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 4000,
          y: baseHeight - 200,
          image: smPlatform,
        },
        {
          x: 4400,
          y: baseHeight - 400,
          image: smPlatform,
        },
        {
          x: 4800,
          y: baseHeight - 600,
          image: smPlatform,
        },
        {
          x: 5750,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 6250,
          y: baseHeight - 210,
          image: diamand,
          type: 'finish',
        },
      ],
    };
  };
  third = (): LevelConfigItem => {
    const { hills, platform, smPlatform } = this._getImage('3');
    const { baseHeight } = this;
    return {
      id: '3',
      finishPoint: 5000,
      items: [
        {
          type: 'decoration',
          x: -1,
          y: baseHeight - hills.height + 20,
          image: hills,
          speedKoef: 0.66,
        },
        {
          x: 0,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 1000,
          y: baseHeight - 240,
          image: smPlatform,
        },
        {
          x: 1000,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 1500,
          y: baseHeight - 400,
          image: platform,
        },
        {
          x: 2200,
          y: baseHeight - 400,
          image: platform,
        },
        {
          x: 3200,
          y: baseHeight - 60,
          image: platform,
        },
        {
          x: 4000,
          y: baseHeight - 200,
          image: smPlatform,
        },
        {
          x: 4400,
          y: baseHeight - 400,
          image: smPlatform,
        },
        {
          x: 4800,
          y: baseHeight - 600,
          image: smPlatform,
        },
        {
          x: 5089,
          y: baseHeight - 600,
          image: platform,
        },
        {
          x: 5450,
          y: baseHeight - 750,
          image: diamand,
          type: 'finish',
        },
      ],
    };
  };

  _getImage = (id: string) => {
    return getImage(+id);
  };
}
