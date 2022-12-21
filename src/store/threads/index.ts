import { createSlice } from '@reduxjs/toolkit';
import { threadItemTypes } from '@/lib/types';

type SliceState = { data: threadItemTypes[] };

const threadsSlice = createSlice({
  name: 'threads',
  initialState: { data: [] } as SliceState,
  reducers: {
    receiveThreads(state, action) {
      state.data = action.payload;
    },
    addThreads(state, { payload }) {
      const data = payload;
      state.data.unshift(data);
    },
    toggleUpVoteThread(state, { payload }) {
      const newArr = state.data.map((thread) => {
        if (thread.id === payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(payload.ownerId)
              ? thread.upVotesBy.filter((id) => id !== payload.ownerId)
              : thread.upVotesBy.concat([payload.ownerId]),
          };
        } else {
          return { ...thread };
        }
      });
      state.data = newArr;
    },
    toggleDownVoteThread(state, { payload }) {
      const newArr = state.data.map((thread: threadItemTypes) => {
        if (thread.id === payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.includes(payload.ownerId)
              ? thread.downVotesBy.filter((id) => id !== payload.ownerId)
              : thread.downVotesBy.concat([payload.ownerId]),
          };
        } else {
          return { ...thread };
        }
      });
      state.data = newArr;
    },
  },
});

export const threadsAction = threadsSlice.actions;
export default threadsSlice;
