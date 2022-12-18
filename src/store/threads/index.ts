import { createSlice } from '@reduxjs/toolkit';

const threadsSlice = createSlice({
  name: 'threads',
  initialState: { data: [] },
  reducers: {
    receiveThreads(state, action) {
      state.data = action.payload;
    },
  },
});

export const threadsAction = threadsSlice.actions;
export default threadsSlice;
