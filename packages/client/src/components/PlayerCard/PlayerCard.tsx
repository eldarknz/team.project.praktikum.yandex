import { Avatar } from '@components/Avatar';
import styles from './PlayerCard.module.scss';

export interface IPlayerCardProps {
  position: number;
  imgSrc?: string;
  login: string;
  score: number;
}

export const PlayerCard = ({
  position,
  imgSrc,
  login,
  score,
}: IPlayerCardProps) => {
  return (
    <div className={styles.playerCard}>
      <div className={styles.playerCardCol}>
        {position}
      </div>
      <div className={styles.playerCardCol}>
        <div className={styles.playerInfo}>
          <Avatar src={imgSrc} />
          <div className={styles.playerName}>
            {login}
          </div>
        </div>
      </div>
      <div className={styles.playerCardCol}>
        {score}
      </div>
    </div>
  );
};
