import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import { threadItemTypes } from '@/lib/types';
import API from '@/lib/service/API';
import { threadsAction } from '@/store/threads';
import { usersAction } from '@/store/users';
import { categoryActions } from '@/store/category';

export const asyncPopulateUsersAndThreads = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(showLoading());
      const threads = await API.getAllThreads();
      const users = await API.getAllUsers();
      const category = [
        ...new Set(threads.map((thread: threadItemTypes) => thread.category)),
      ];

      dispatch(threadsAction.receiveThreads(threads));
      dispatch(usersAction.receiveUsers(users));
      dispatch(categoryActions.receiveListCategory(category));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        toast.error(err.message);
      } else {
        toast.error('Ups, something went wrong');
      }
    } finally {
      dispatch(hideLoading());
    }
  };
};
