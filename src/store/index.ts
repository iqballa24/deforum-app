import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;