import cn from 'classnames';
import { Grid } from '@components/Grid';
import styles from './Leaderboard.module.scss';

export const Leaderboard = () => {
  return (
    <Grid.Container width={'full'}>
      <Grid.Row>
        <Grid.Col>
          <div>Leaderboard</div>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};
