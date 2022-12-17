import { createSlice } from '@reduxjs/toolkit';
import { uiState } from 'lib/types';

const initialState: uiState = {
  showModalSettings: false,
  showModalAddThread: false,
  isDarkMode: !!localStorage.getItem('darkMode'),
  language: localStorage.getItem('language') ?? 'en',
};

console.log(localStorage.getItem('language') ?? 'en');

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
    toggleTheme(state, { payload }) {
      state.isDarkMode = payload;
    },
    toggleLanguage(state, { payload }) {
      console.log(payload)
      state.language = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
