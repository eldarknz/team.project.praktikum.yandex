import { API_URL } from '@shared/config/constants';
import { BaseApi } from '@api/BaseAPI';

export interface LeaderboardData {
  imgSrc?: string;
  login: string;
  teamwork_theTeam_score: number;
}

export interface LeaderboardAddUserProps {
  data: LeaderboardData;
  ratingFieldName?: string;
  teamName?: string;
}

export interface LeaderboardGetAllProps {
  ratingFieldName?: string;
  cursor: number;
  limit: number;
}

export class LeaderboardAPI extends BaseApi {
  public addUser(data: LeaderboardAddUserProps) {
    return this.http.post({
      url: `${API_URL}/leaderboard`,
      body: data,
    });
  }

  public getAll(data: LeaderboardGetAllProps) {
    return this.http.post({
      url: `${API_URL}/leaderboard/all`,
      body: data,
    });
  }
}
