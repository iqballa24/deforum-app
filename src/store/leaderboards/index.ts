import { createSlice } from '@reduxjs/toolkit';

const leaderboardsSlice = createSlice({
  name: 'leaderboards',
  initialState: { data: [] },
  reducers: {
    receiveLeaderboards(state, action) {
      state.data = action.payload;
    },
  },
});

export const leaderboardsAction = leaderboardsSlice.actions;
export default leaderboardsSlice;
