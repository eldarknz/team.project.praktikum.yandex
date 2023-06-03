import GenericObject from './GenericObject';

export type GenericObjectImplProps = {
  context: CanvasRenderingContext2D | null;
  x: number;
  y: number;
  image: HTMLImageElement;
  width?: number;
  height?: number;
};

export default class GenericObjectImpl
  implements GenericObject
{
  readonly context: CanvasRenderingContext2D | null;
  image: GenericObject['image'];
  width: GenericObject['width'];
  height: GenericObject['height'];
  position: GenericObject['position'];
  constructor({
    context,
    x,
    y,
    image,
    width,
    height,
  }: GenericObjectImplProps) {
    this.context = context;
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = width || image.width;
    this.height = height || image.height;
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
