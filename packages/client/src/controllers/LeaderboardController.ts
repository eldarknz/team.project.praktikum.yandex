import { LeaderboardAddUserProps, LeaderboardGetAllProps } from '@api/LeaderboardAPI';
import { BaseController } from './BaseController';

export class LeaderboardController extends BaseController {
  private readonly ratingFieldName = 'teamwork_theTeam_score';

  public async addUser(props: LeaderboardAddUserProps) {
    const teamName = '26_mf_teamwork_03_theTeam';

    return this.services.lead
      .addUser({
        ...props,
        ratingFieldName: this.ratingFieldName,
        teamName,
      })
      .then(async () => {
        console.log(
          `Юзер ${props.data.login} отправил результат: ${props.data.teamwork_theTeam_score}`,
        );
      })
      .catch(error => {
        console.error('Результат не был отправлен', error);
      });
  }

  public async getAll(props: LeaderboardGetAllProps) {
    return this.services.lead
      .getAll({
        ...props,
        ratingFieldName: this.ratingFieldName,
      })
      .then(data => {
        console.log('Данные лидерборда получены');
        return data;
      })
      .catch(error => {
        console.error('Ошибка, данные лидерборда не получены', error);
      });
  }
}
