import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import { threadDetailAction } from '@/store/threadDetail';
import API from '@/lib/service/API';

export const asyncReceiveThreadDetail = (threadId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showLoading());
      const res = await API.getThreadDetail(threadId);
      dispatch(threadDetailAction.receiveThreadDetail(res));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        toast.error(err.message);
      } else {
        console.log('Unexpected error', err);
        toast.error('Something went wrong');
      }
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const asyncCreateCommentThread = (content: string, id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showLoading());
      const res = await API.createCommentThread(content, id);
      dispatch(threadDetailAction.receiveCommentThread(res));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        toast.error(err.message);
      } else {
        console.log('Unexpected error', err);
        toast.error('Something went wrong');
      }
    } finally {
      dispatch(hideLoading());
    }
  };
};
