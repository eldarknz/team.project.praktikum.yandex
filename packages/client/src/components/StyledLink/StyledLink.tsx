import {
  Link,
  LinkProps,
} from 'react-router-dom';
import cn from 'classnames';

import styles from './StyledLink.module.scss';

export const StyledLink = ({
  className,
  ...otherProps
}: LinkProps) => {
  return (
    <Link
      {...otherProps}
      className={cn([
        className,
        styles.styledLink,
      ])}
    />
  );
};
