import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  reducers: {
    receiveUsers(state, action) {
      state.data = action.payload;
    },
  },
});

export const usersAction = usersSlice.actions;
export default usersSlice;
