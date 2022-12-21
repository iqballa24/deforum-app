import { createSlice } from '@reduxjs/toolkit';
import { detailThreadsTypes } from '@/lib/types';

type SliceState = { data: detailThreadsTypes };

const initialState = {
  id: '',
  title: '',
  body: '',
  category: '',
  createdAt: '',
  ownerId: '',
  upVotesBy: [],
  downVotesBy: [],
  comments: [],
  owner: { id: '', avatar: '', email: '', name: '' },
};

const threadDetailSlice = createSlice({
  name: 'thread_Detail',
  initialState: { data: initialState } as SliceState,
  reducers: {
    receiveThreadDetail(state, { payload }) {
      state.data = payload;
    },
    receiveCommentThread(state, { payload }) {
      state.data.comments = [payload, ...state.data.comments];
    },
    toggleUpVoteComment(state, { payload }) {
      const newArr = state.data.comments.map((comment) => {
        if (comment.id === payload.commentId) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(payload.ownerId)
              ? comment.upVotesBy.filter((id) => id !== payload.ownerId)
              : comment.upVotesBy.concat([payload.ownerId]),
          };
        } else {
          return { ...comment };
        }
      });
      state.data.comments = newArr;
    },
    toggleDownVoteComment(state, { payload }) {
      const newArr = state.data.comments.map((comment) => {
        if (comment.id === payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(payload.ownerId)
              ? comment.downVotesBy.filter((id) => id !== payload.ownerId)
              : comment.downVotesBy.concat([payload.ownerId]),
          };
        } else {
          return { ...comment };
        }
      });
      state.data.comments = newArr;
    },
  },
});

export const threadDetailAction = threadDetailSlice.actions;
export default threadDetailSlice;
