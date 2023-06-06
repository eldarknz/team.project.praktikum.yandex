import { Avatar } from '@components/Avatar';
import styles from './PlayerCard.module.scss';

export interface IPlayerCardProps {
  position: number;
  imgSrc?: string;
  name: string;
  score: number;
}

export const PlayerCard = ({
  position,
  imgSrc,
  name,
  score,
}: IPlayerCardProps) => {
  return (
    <div className={styles.playerCard}>
      <div className={styles.playerCardCol}>
        {position}
      </div>
      <div className={styles.playerCardCol}>
        <div className={styles.playerInfo}>
          <Avatar />
          <div className={styles.playerName}>
            {name}
          </div>
        </div>
      </div>
      <div className={styles.playerCardCol}>
        {score}
      </div>
    </div>
  );
};
