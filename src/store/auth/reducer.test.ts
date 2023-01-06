/**
 * test scenario for authSlice reducer
 *
 * - authSlice reducer
 *  - should initially set auth to initial state
 *  - should return the isLoggedIn is true and user data when given setAuthUser action
 *  - should return the initial state when given unsetAuthUser action
 */

import store from '@/store';
import { userTypes } from '@/lib/types';
import { authSliceAction } from '@/store/auth';

type userSlice = {
  isLoggedIn: boolean;
  user: userTypes;
};

describe('authSlice reducer', () => {
  it('Should initially set auth to initial state', () => {
    // arrange
    const initialState: userSlice = {
      isLoggedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        avatar: '',
      },
    };

    // action
    const state = store.getState().auth;

    // assert
    expect(state.isLoggedIn).toEqual(false);
    expect(state.user).toEqual(initialState.user);
  });

  it('Should return the user data and isLoggedIn is true when given setAuthUser action', () => {
    // arrange
    const initialState = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };

    // action
    store.dispatch(authSliceAction.setAuthUser(initialState));
    const state = store.getState().auth;

    // assert
    expect(state.isLoggedIn).toEqual(true);
    expect(state.user).toEqual(initialState);
  });
});
