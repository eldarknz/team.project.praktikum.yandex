import cn from 'classnames';
import styles from './Avatar.module.scss';

export interface IAvatarProps {
  name?: string;
  size?: number;
  src?: string;
  className?: string;
}

type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

const FONT_SIZE_FACTOR = 0.4;

export const Avatar: React.FC<IAvatarProps> = ({ name = '', src = '', size = 48, className }) => {
  const style = {
    lineHeight: size + 'px',
    width: size,
    height: size,
    fontSize: size * FONT_SIZE_FACTOR,
    objectFit: 'cover' as ObjectFit | undefined,
  };

  const componentClassName = cn(styles.avatar, className);

  if (src) {
    return <img src={src} className={componentClassName} style={style} />;
  }

  return <div className={componentClassName} style={style}></div>;
};
