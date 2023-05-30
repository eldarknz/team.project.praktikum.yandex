import { InputHTMLAttributes } from 'react';

type OwnProps = {
  className: string;
} & InputHTMLAttributes<HTMLInputElement>;

type Props = OwnProps;

export const Input = ({ ...otherProps }: Props) => {
  return <input {...otherProps} />;
};
