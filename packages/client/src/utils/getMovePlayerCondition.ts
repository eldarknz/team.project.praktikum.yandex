import { Keys } from '../pages/Game/types';
import PlayerImpl from '../core/Player/PlayerImpl';

export const getMovePlayerCondition = (
  keys: Keys,
  player: PlayerImpl,
  currentKey: string
) => {
  if (
    keys.right.presed &&
    currentKey === 'right' &&
    player.currentSprite !==
      player.sprites.run.right
  ) {
    player.currentSprite =
      player.sprites.run.right;
    player.frames = 1;
    player.crop = player.sprites.run.crop;
    player.width = player.sprites.run.width;
  } else if (
    keys.left.presed &&
    currentKey === 'left' &&
    player.currentSprite !==
      player.sprites.run.left
  ) {
    player.currentSprite =
      player.sprites.run.left;
    player.frames = 1;
    player.crop = player.sprites.run.crop;
    player.width = player.sprites.run.width;
  } else if (
    !keys.right.presed &&
    currentKey === 'right' &&
    player.currentSprite !==
      player.sprites.stand.right
  ) {
    player.currentSprite =
      player.sprites.stand.right;
    player.frames = 1;
    player.crop = player.sprites.stand.crop;
    player.width = player.sprites.stand.width;
  } else if (
    !keys.left.presed &&
    currentKey === 'left' &&
    player.currentSprite !==
      player.sprites.stand.left
  ) {
    player.currentSprite =
      player.sprites.stand.left;
    player.frames = 1;
    player.crop = player.sprites.stand.crop;
    player.width = player.sprites.stand.width;
  }
};
