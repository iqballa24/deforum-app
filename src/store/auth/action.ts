import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import { authSliceAction } from '@/store/auth';
import API from '@/lib/service/API';
import { FormLoginTypes } from '@/lib/types';

export const setAuthUser = (authUser: FormLoginTypes) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showLoading());
      const token = await API.login(authUser);
      API.putAccessToken(token);

      const userData = await API.getOwnProfile();
      dispatch(authSliceAction.setAuthUser(userData));
      toast.success('Login successful');
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

export const unsetAuthUser = () => {
  return (dispatch: Dispatch) => {
    dispatch(authSliceAction.unsetAuthUser());
    API.putAccessToken('');
    toast.success('Log out successful');
  };
};
