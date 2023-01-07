import { Dispatch } from 'redux';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import { threadDetailAction } from '@/store/threadDetail';
import API from '@/lib/service/API';
import { RootState } from '@/store';

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
        toast.error('Ups, something went wrong');
      }
    } finally {
      dispatch(hideLoading());
    }
  };
};

export const asyncCreateCommentThread = (content: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { threadDetail } = getState();
    try {
      dispatch(showLoading());
      const res = await API.createCommentThread(content, threadDetail.data.id);
      dispatch(threadDetailAction.addNewCommentThread(res));
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

export const asyncUpVoteComment = (commentId: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { auth, threadDetail } = getState();

    let isUserDownVote = false;

    threadDetail.data.comments.map((comment) => {
      if (comment.id === commentId) {
        isUserDownVote = comment.downVotesBy.includes(auth.user.id);
      }
    });

    dispatch(
      threadDetailAction.upVoteComment({
        commentId,
        ownerId: auth.user.id,
      })
    );

    if (isUserDownVote) {
      await dispatch(
        threadDetailAction.downVoteComment({
          commentId,
          ownerId: auth.user.id,
        })
      );
    }

    try {
      dispatch(showLoading());
      await API.upVoteComment(threadDetail.data.id, commentId);
    } catch (err) {
      dispatch(
        threadDetailAction.upVoteComment({
          commentId,
          ownerId: auth.user.id,
        })
      );
      if (isUserDownVote) {
        await dispatch(
          threadDetailAction.downVoteComment({
            commentId,
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

export const asyncDownVoteComment = (commentId: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { auth, threadDetail } = getState();

    let isUserVoteUp = false;

    threadDetail.data.comments.map((comment) => {
      if (comment.id === commentId) {
        isUserVoteUp = comment.upVotesBy.includes(auth.user.id);
      }
    });

    await dispatch(
      threadDetailAction.downVoteComment({
        commentId,
        ownerId: auth.user.id,
      })
    );

    if (isUserVoteUp) {
      await dispatch(
        threadDetailAction.upVoteComment({
          commentId,
          ownerId: auth.user.id,
        })
      );
    }

    try {
      dispatch(showLoading());
      await API.downVoteComment(threadDetail.data.id, commentId);
    } catch (err) {
      await dispatch(
        threadDetailAction.downVoteComment({
          commentId,
          ownerId: auth.user.id,
        })
      );
      if (isUserVoteUp) {
        await dispatch(
          threadDetailAction.upVoteComment({
            commentId,
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
