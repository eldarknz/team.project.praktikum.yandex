type Position = {
  x: number;
  y: number;
};

type GenericObjectKind =
  | 'platform'
  | 'decoration'
  | 'finish';

export type GenericObjectImplProps = {
  context: CanvasRenderingContext2D | null;
  x: number;
  y: number;
  image: HTMLImageElement;
  width?: number;
  height?: number;
  speedKoef?: number;
  type?: GenericObjectKind;
};

export default class GenericObjectImpl {
  readonly context: CanvasRenderingContext2D | null;
  image: HTMLImageElement;
  width: number;
  height: number;
  position: Position;
  speedKoef = 1;
  type: GenericObjectKind;
  constructor({
    context,
    x,
    y,
    image,
    width,
    height,
    speedKoef,
    type = 'platform',
  }: GenericObjectImplProps) {
    this.context = context;
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = width || image.width;
    this.height = height || image.height;
    this.speedKoef = speedKoef || 1;
    this.type = type;
  }

  draw() {
    this.context &&
      this.context.drawImage(
        this.image,
        this.position.x,
        this.position.y
      );
  }
}
