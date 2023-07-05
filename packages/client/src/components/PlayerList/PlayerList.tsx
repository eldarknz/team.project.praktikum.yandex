import {
  PlayerCard,
  IPlayerCardProps,
} from '@components/PlayerCard';
import styles from './PlayerList.module.scss';

export interface IPlayerListProps {
  players: Array<IPlayerCardProps>;
}

export const PlayerList = ({
  players,
}: IPlayerListProps) => {
  const playerList = players.map(player => (
    <PlayerCard
      key={player.position}
      position={player.position}
      imgSrc={player.imgSrc}
      login={player.login}
      score={player.score}
    />
  ));

  return (
    <>
      <div className={styles.playListHeader}>
        <div className={styles.playListHeaderCol}>
          Позиция
        </div>
        <div className={styles.playListHeaderCol}>
          Игрок
        </div>
        <div className={styles.playListHeaderCol}>
          Кол-во очков
        </div>
      </div>
      <div className={styles.playListBody}>
        {playerList}
      </div>
    </>
  );
};
