import { Grid } from '@components/Grid';
import { Input } from '@components/Input';
import { PlayerList } from '@components/PlayerList';
import { IPlayerCardProps } from '@components/PlayerCard';
import styles from './Leaderboard.module.scss';
import { useControllers } from '@core/ControllersContext';
import { useEffect, useState } from 'react';
import { LeaderboardData } from '@api/LeaderboardAPI';

export const Leaderboard = () => {
  const controllers = useControllers();
  const [playerListData, setPlayerListData] =
    useState<IPlayerCardProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const dataList:
          | { data: LeaderboardData }[]
          | unknown = await controllers.lead.getAll(
          {
            ratingFieldName:
              'teamwork_theTeam_score',
            cursor: 0,
            limit: 10,
          }
        );

        if (Array.isArray(dataList)) {
          const sortedData = dataList.sort(
            (a, b) =>
              b.data.teamwork_theTeam_score -
              a.data.teamwork_theTeam_score
          );

          const updatedPlayerListData =
            sortedData.map((item, index) => ({
              position: index + 1,
              imgSrc:
                'https://ya-praktikum.tech/api/v2/resources/' +
                item.data.imgSrc,
              login: item.data.login,
              score:
                item.data.teamwork_theTeam_score,
            }));

          setPlayerListData(
            updatedPlayerListData
          );
        } else {
          console.error(
            'Ошибка: полученные данные не являются массивом'
          );
        }
      } catch (error) {
        console.error(
          'Ошибка при получении данных:',
          error
        );
      }
    }

    fetchData();
  }, []);

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
