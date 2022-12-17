import { createSlice } from '@reduxjs/toolkit';
import { uiState } from 'lib/types/rootState';

const initialState: uiState = {
  showModalSettings: false,
  showModalAddThread: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleModalSettings(state) {
      state.showModalSettings = !state.showModalSettings;
    },
    toggleModalAddThread(state) {
      state.showModalAddThread = !state.showModalAddThread;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
