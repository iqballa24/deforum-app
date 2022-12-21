import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      avatar: '',
    },
  },
  reducers: {
    setAuthUser(state, { payload }) {
      state.isLoggedIn = true;
      state.user = payload;
    },
    unsetAuthUser(state) {
      state.isLoggedIn = false;
      state.user = {
        id: '',
        name: '',
        email: '',
        avatar: '',
      };
    },
  },
});

export const authSliceAction = authSlice.actions;
export default authSlice;
