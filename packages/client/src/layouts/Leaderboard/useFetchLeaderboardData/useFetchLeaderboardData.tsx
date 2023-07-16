import { useEffect, useState } from 'react';
import { useControllers } from '@core/ControllersContext';
import { LeaderboardData } from '@api/LeaderboardAPI';
import { IPlayerCardProps } from '@components/PlayerCard';
import { RESOURCES_URL } from '@shared/config/constants';

export const useFetchLeaderboardData = () => {
  const controllers = useControllers();
  const [playerListData, setPlayerListData] = useState<IPlayerCardProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const dataList: { data: LeaderboardData }[] | unknown = await controllers.lead.getAll({
          cursor: 0,
          limit: 10,
        });

        if (Array.isArray(dataList)) {
          const sortedData = dataList.sort(
            (a, b) => b.data.teamwork_theTeam_score - a.data.teamwork_theTeam_score,
          );

          const updatedPlayerListData = sortedData.map((item, index) => ({
            position: index + 1,
            imgSrc: RESOURCES_URL + '/' + item.data.imgSrc,
            login: item.data.login,
            score: item.data.teamwork_theTeam_score,
          }));

          setPlayerListData(updatedPlayerListData);
        } else {
          console.error('Ошибка: полученные данные не являются массивом');
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }

    fetchData();
  }, []);

  return playerListData;
};
