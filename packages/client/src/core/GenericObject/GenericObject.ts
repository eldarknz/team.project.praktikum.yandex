import { PlayerPosition } from '@core/Player/Player';

export default interface GenericObject {
  position: PlayerPosition;
  image: HTMLImageElement;
  width: number;
  height: number;
  draw: () => void;
}
