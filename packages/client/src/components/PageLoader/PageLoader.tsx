import { Spinner } from '@components/Spinner';
import './PageLoader.scss';

export const PageLoader = () => {
  return (
    <div className="page-loader">
      <Spinner size={64} />
    </div>
  );
};
