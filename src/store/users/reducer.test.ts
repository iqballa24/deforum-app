/**
 * test scenario for usersSlice reducer
 *
 * - usersSlice reducer
 *  - should initially set users to initial state
 *  - should return the users when given receiveUsers action
 *
 */
import store from '@/store';
import { userTypes } from '@/lib/types';
import { usersAction } from '@/store/users';

describe('usersSlice reducer', () => {
  it('Should initially set users to initial state', () => {
    // arrange
    const initialState: userTypes[] = [];

    // action
    const state = store.getState().users;

    // assert
    expect(state.data).toEqual(initialState);
  });

  it('Should return the users when given receiveUsers action', () => {
    // arrange
    const initialState = [
      {
        id: 'john_doe',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
    ];

    // action
    store.dispatch(usersAction.receiveUsers(initialState));
    const state = store.getState().users;

    // assert
    expect(state.data).toEqual(initialState);
  });
});
