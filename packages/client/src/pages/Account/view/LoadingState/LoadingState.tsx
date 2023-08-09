import { PageLoader } from '@components/PageLoader';

import styles from './LoadingState.module.scss';

export const LoadingState = () => {
  return (
    <div className={styles.page}>
      <PageLoader />
    </div>
  );
};
