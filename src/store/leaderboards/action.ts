import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { leaderboardsAction } from '@/store/leaderboards';
import API from '@/lib/service/API';

export const asyncReceiveLeaderboards = () => {
  return async (dispatch: any) => {
    try {
      dispatch(showLoading());
      const res = await API.getLeaderboards();
      dispatch(leaderboardsAction.receiveLeaderboards(res));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log('Unexpected error', err);
      }
    } finally {
      dispatch(hideLoading());
    }
  };
};
