import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authSlice from '@/store/auth';
import uiSlice from './ui';
import threadsSlice from '@/store/threads';
import usersSlice from '@/store/users';
import threadDetailSlice from '@/store/threadDetail';
import leaderboardsSlice from '@/store/leaderboards';
import categorySlice from '@/store/category';

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    ui: uiSlice.reducer,
    threads: threadsSlice.reducer,
    users: usersSlice.reducer,
    threadDetail: threadDetailSlice.reducer,
    leaderboards: leaderboardsSlice.reducer,
    category: categorySlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
