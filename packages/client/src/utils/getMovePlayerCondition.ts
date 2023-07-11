import { Keys } from '../pages/Game/types';
import PlayerImpl from '../core/Player/PlayerImpl';

type Flow = 'right' | 'left';
type Action = 'stand' | 'run';

export const getMovePlayerCondition = (keys: Keys, player: PlayerImpl, currentKey: string) => {
  const moveTo = (flow: Flow, action: Action) => {
    player.currentSprite = player.sprites[action][flow];
    player.frames = 1;
    player.crop = player.sprites[action].crop;
    player.width = player.sprites[action].width;
  };
  const getMoveToCondition = (flow: Flow, action: Action, reverse?: boolean) => {
    const isPressed = reverse ? !keys[flow].presed : keys[flow].presed;
    return (
      isPressed && currentKey === flow && player.currentSprite !== player.sprites[action][flow]
    );
  };
  if (getMoveToCondition('right', 'run')) {
    moveTo('right', 'run');
  } else if (getMoveToCondition('left', 'run')) {
    moveTo('left', 'run');
  } else if (getMoveToCondition('right', 'stand', true)) {
    moveTo('right', 'stand');
  } else if (getMoveToCondition('left', 'stand', true)) {
    moveTo('left', 'stand');
  }
};
