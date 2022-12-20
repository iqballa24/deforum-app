import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import { registerTypes } from '@/lib/types';
import API from '@/lib/service/API';

function asyncRegisterUser({ name, email, password }: registerTypes) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showLoading());
      await API.register({ name, email, password });
      toast.success('Registration successful');
      return { error: false };
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        console.log('Unexpected error', err);
        toast.error('Something went wrong');
      }

      return { error: true };
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { asyncRegisterUser };
