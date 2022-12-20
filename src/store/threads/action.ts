import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import API from '@/lib/service/API';
import { createThreadTypes } from '@/lib/types';
import { threadsAction } from '@/store/threads';

export const asyncCreateThread = ({
  title,
  body,
  category,
}: createThreadTypes) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showLoading());
      const thread = await API.createThread({ title, body, category });
      dispatch(threadsAction.addThreads(thread));
      toast.success('Thread has been created');
    } catch (err) {
      if (err instanceof Error) {
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
