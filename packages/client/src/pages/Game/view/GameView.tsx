import styles from './GameView.module.scss';

export type GameViewProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export default function GameView({
  canvasRef,
}: GameViewProps) {
  return (
    <canvas
      ref={canvasRef}
      className={styles.container}></canvas>
  );
}
