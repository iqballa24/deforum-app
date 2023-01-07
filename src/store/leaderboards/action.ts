import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import { leaderboardsAction } from '@/store/leaderboards';
import API from '@/lib/service/API';

export const asyncReceiveLeaderboards = () => {
  return async (dispatch: Dispatch) => {
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
      toast.error('Ups, something went wrong');
    } finally {
      dispatch(hideLoading());
    }
  };
};
