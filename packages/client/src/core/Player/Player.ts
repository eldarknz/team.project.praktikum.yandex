export interface Player {
  position: PlayerPosition;
  frames: number;
  speed: number;
  width: number;
  height: number;
  crop: number;
  image: HTMLImageElement;
  currentSprite: HTMLImageElement;
  velocity: PlayerPosition;
  sprites: Sprites;
  update: () => void;
  draw: () => void;
}

export type PlayerPosition = {
  x: number;
  y: number;
};

type Sprites = {
  stand: Sprite;
  run: Sprite;
};

type Sprite = {
  right: HTMLImageElement;
  left: HTMLImageElement;
  crop: number;
  width: number;
};
