import cn from 'classnames';

import { Spinner } from '@components/Spinner';

import styles from './PageLoader.module.scss';

export interface PageLoaderProps {
  withBackground?: boolean;
}

export const PageLoader = ({
  withBackground,
}: PageLoaderProps) => {
  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.withBackground]: withBackground,
      })}>
      <Spinner size={64} />
    </div>
  );
};
