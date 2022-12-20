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
  },
});

export const threadDetailAction = threadDetailSlice.actions;
export default threadDetailSlice;
