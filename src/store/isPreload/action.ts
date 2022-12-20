import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { authSliceAction } from '@/store/auth';
import isPreloadSliceAction from '@/store/isPreload';
import API from '@/lib/service/API';

export const asyncPreloaderProcess = () => {
  return async (dispatch: Dispatch) => {
    try {
      // preload process
      dispatch(showLoading());
      const authUser = await API.getOwnProfile();
      dispatch(authSliceAction.setAuthUser(authUser));
    } catch (err) {
      dispatch(authSliceAction.unsetAuthUser());
    } finally {
      dispatch(isPreloadSliceAction.toggleIsPreload());
      dispatch(hideLoading());
    }
  };
};
