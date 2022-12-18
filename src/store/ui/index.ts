import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModalSettings: false,
  showModalAddThread: false,
  isDarkMode: !!localStorage.getItem('darkMode'),
  language: localStorage.getItem('language') ?? 'en',
  queryCategory: '',
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
    toggleTheme(state, { payload }) {
      state.isDarkMode = payload;
    },
    toggleLanguage(state, { payload }) {
      state.language = payload;
    },
    changeCategory(state, { payload }) {
      state.queryCategory = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
