import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import API from '@/lib/service/API';
import { createThreadTypes } from '@/lib/types';
import { threadsAction } from '@/store/threads';
import { RootState } from '@/store';

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

export const asyncUpVoteThread = (threadId: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { auth, threads } = getState();

    let isUserDownVote = false;

    threads.data.map((thread) => {
      if (thread.id === threadId) {
        isUserDownVote = thread.downVotesBy.includes(auth.user.id);
      }
    });

    dispatch(
      threadsAction.toggleUpVoteThread({
        threadId,
        ownerId: auth.user.id,
        error: false,
      })
    );

    if (isUserDownVote) {
      await dispatch(
        threadsAction.toggleDownVoteThread({
          threadId,
          ownerId: auth.user.id,
        })
      );
    }

    try {
      dispatch(showLoading());
      await API.upVoteThread(threadId);
    } catch (err) {
      dispatch(
        threadsAction.toggleUpVoteThread({
          threadId,
          ownerId: auth.user.id,
          error: true,
        })
      );

      if (isUserDownVote) {
        await dispatch(
          threadsAction.toggleDownVoteThread({
            threadId,
            ownerId: auth.user.id,
          })
        );
      }

      toast.error('Something went wrong');
      console.log(err);
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const asyncDownVoteThread = (threadId: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { auth, threads } = getState();

    let isUserUpVote = false;

    threads.data.map((thread) => {
      if (thread.id === threadId) {
        isUserUpVote = thread.upVotesBy.includes(auth.user.id);
      }
    });

    dispatch(
      threadsAction.toggleDownVoteThread({
        threadId,
        ownerId: auth.user.id,
        error: false,
      })
    );

    if (isUserUpVote) {
      await dispatch(
        threadsAction.toggleUpVoteThread({
          threadId,
          ownerId: auth.user.id,
        })
      );
    }

    try {
      dispatch(showLoading());
      await API.downVoteThread(threadId);
    } catch (err) {
      dispatch(
        threadsAction.toggleDownVoteThread({
          threadId,
          ownerId: auth.user.id,
          error: true,
        })
      );

      if (isUserUpVote) {
        await dispatch(
          threadsAction.toggleUpVoteThread({
            threadId,
            ownerId: auth.user.id,
          })
        );
      }

      toast.error('Something went wrong');
      console.log(err);
    } finally {
      dispatch(hideLoading());
    }
  };
};
