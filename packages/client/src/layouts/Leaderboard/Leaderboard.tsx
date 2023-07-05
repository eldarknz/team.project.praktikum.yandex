import { Grid } from '@components/Grid';
import { Input } from '@components/Input';
import { PlayerList } from '@components/PlayerList';
import styles from './Leaderboard.module.scss';
import { useFetchLeaderboardData } from '@pages/Leaderboard/useFetchLeaderboardData';

export const Leaderboard = () => {
  const playerListData =
    useFetchLeaderboardData();

  return (
    <Grid.Container
      width={'full'}
      className={styles.leaderBoard}>
      <Grid.Row justify="center">
        <Grid.Col width={6}>
          <h1 className={styles.title}>
            Лидерборд
          </h1>
          <h3 className={styles.subTitle}>
            Максимальное количество очков за игру
          </h3>
          <div className={styles.searchBar}>
            <Input
              name="search"
              labelText="Поиск игрока"
            />
          </div>
          <PlayerList players={playerListData} />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};
