import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: { data: [] },
  reducers: {
    receiveListCategory(state, { payload }) {
      state.data = payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
