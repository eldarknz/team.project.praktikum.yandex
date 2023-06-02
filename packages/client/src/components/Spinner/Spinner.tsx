import './Spinner.scss';

export interface SpinnerProps {
  size?: number;
}

export const Spinner = ({
  size = 24,
}: SpinnerProps) => {
  return (
    <span
      className="spinner"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
