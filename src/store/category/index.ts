import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: { data: [] },
  reducers: {
    receiveListCategory(state, action) {
      state.data = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
