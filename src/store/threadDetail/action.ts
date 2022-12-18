import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { threadDetailAction } from '@/store/threadDetail';
import API from '@/lib/service/API';

export const asyncReceiveThreadDetail = (threadId: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(showLoading);
      const res = await API.getThreadDetail(threadId);
      dispatch(threadDetailAction.receiveThreadDetail(res));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log('Unexpected error', err);
      }
    } finally {
      dispatch(hideLoading);
    }
  };
};
