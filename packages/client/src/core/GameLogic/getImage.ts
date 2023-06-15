import platform1 from '@assets/png/platform.png';
import platform2 from '@assets/png/platform2.png';
import platform3 from '@assets/png/platform3.png';
import smPlatform1 from '@assets/png/platformSmallTall.png';
import smPlatform2 from '@assets/png/platformSmallTall2.png';
import smPlatform3 from '@assets/png/platformSmallTall3.png';
import hills1 from '@assets/png/hills.png';
import hills2 from '@assets/png/hills2.png';
import hills3 from '@assets/png/hills3.png';
import createImage from '@utils/createImage';

const base = {
  platform: createImage(platform1),
  smPlatform: createImage(smPlatform1),
  hills: createImage(hills1),
};

export default function getImage(id: number) {
  switch (id) {
    case 1: {
      return base;
    }
    case 2: {
      return {
        platform: createImage(platform2),
        smPlatform: createImage(smPlatform2),
        hills: createImage(hills2),
      };
    }
    case 3: {
      return {
        platform: createImage(platform3),
        smPlatform: createImage(smPlatform3),
        hills: createImage(hills3),
      };
    }

    default: {
      return base;
    }
  }
}
