import { createSlice } from '@reduxjs/toolkit';

const isPreloadSlice = createSlice({
  name: 'isPreload',
  initialState: { isPreload: true },
  reducers: {
    toggleIsPreload(state) {
      state.isPreload = !state.isPreload;
    },
  },
});

export const isPreloadSliceAction = isPreloadSlice.actions;
export default isPreloadSliceAction;
