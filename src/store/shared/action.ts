import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { threadItemTypes } from '@/lib/types';
import API from '@/lib/service/API';
import { threadsAction } from '@/store/threads';
import { usersAction } from '@/store/users';
import { categoryActions } from '@/store/category';

export const asyncPopulateUsersAndThreads = () => {
  return async (dispatch: any) => {
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
      } else {
        console.log('Unexpected error', err);
      }
    } finally {
      dispatch(hideLoading());
    }
  };
};
