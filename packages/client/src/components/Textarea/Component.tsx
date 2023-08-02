import cn from 'classnames';
import { useState, useId, TextareaHTMLAttributes } from 'react';
import { InputControl } from '@components/InputControl';
import styles from './styles.module.scss';

export type TTextareaProps = {
  className?: string;
  name: string;
  errorText?: string;
  labelText?: string;
  placeholder?: string;
  validator?: (content: string) => boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({
  className,
  // errorText,
  labelText,
  placeholder,
  name,
  // onChange,
  // validator,
  ...otherProps
}: TTextareaProps) => {
  const [error] = useState<string | null>(null);

  /* eslint-disable */
  const componentId = labelText ? useId() : undefined;
  /* eslint-enable */

  const componentClassNames = cn(
    styles.textarea,
    {
      [styles.error]: error,
    },
    className
  );

  const handleBlur = () => {
    console.log('Blur');
  };

  const handleChange = () => {
    console.log('Change');
  };

  return (
    <InputControl labelId={componentId} labelText={labelText} error={error}>
      <textarea
        id={componentId}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        className={componentClassNames}
        placeholder={placeholder}
        {...otherProps}
      />
    </InputControl>
  );
};
