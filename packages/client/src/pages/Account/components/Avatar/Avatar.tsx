import { getResourceUrl } from '@api/utils';
import { ReactComponent as UserIcon } from '@assets/svg/plain/user-icon.svg';
import { Icon } from '@components/Icon';

import styles from './Avatar.module.scss';

export interface AvatarProps {
  link: string | null;
}

export const Avatar = ({ link }: AvatarProps) => {
  if (link) {
    return (
      <div className={styles.avatar}>
        <img
          className={styles.image}
          src={getResourceUrl(link)}
        />
      </div>
    );
  }

  return (
    <div className={styles.avatar}>
      <Icon icon={<UserIcon />} size={120} />
    </div>
  );
};
