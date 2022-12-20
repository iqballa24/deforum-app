import { createSlice } from '@reduxjs/toolkit';
import { threadItemTypes } from '@/lib/types';

type SliceState = { data: threadItemTypes[] }

const threadsSlice = createSlice({
  name: 'threads',
  initialState: { data: [] } as SliceState,
  reducers: {
    receiveThreads(state, action) {
      state.data = action.payload;
    },
    addThreads(state, { payload }) {
      const data = payload;
      state.data = [data, ...state.data];
    },
  },
});

export const threadsAction = threadsSlice.actions;
export default threadsSlice;
