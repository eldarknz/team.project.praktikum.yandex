import { Grid } from '@components/Grid';
import { Input } from '@components/Input';
import { PlayerList } from '@components/PlayerList';
import { IPlayerCardProps } from '@components/PlayerCard';
import styles from './Leaderboard.module.scss';

const playerListData: Array<IPlayerCardProps> = [
  {
    position: 1,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 2,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 3,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 4,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 5,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 6,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 7,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 8,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 9,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 10,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 99,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 999,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
  {
    position: 9999,
    imgSrc: '',
    name: 'Вася Маяковский',
    score: 100,
  },
];

export const Leaderboard = () => {
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
