import { createSlice } from '@reduxjs/toolkit';
import { threadItemTypes } from '@/lib/types';

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
  initialState: { data: initialState },
  reducers: {
    receiveThreadDetail(state, { payload }) {
      state.data = payload;
    },
  },
});

export const threadDetailAction = threadDetailSlice.actions;
export default threadDetailSlice;
