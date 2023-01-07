/**
 * test scenario for usersSlice reducer
 *
 * - usersSlice reducer
 *  - should return the initial state when passed an empty action
 *  - should return the users when given receiveUsers action
 *
 */
import store from '@/store';
import usersSlice, { usersAction } from '@/store/users';

describe('usersSlice reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    // arrange
    const initialState = undefined;
    const action = { type: '' };

    // action
    const state = usersSlice.reducer(initialState, action);

    // assert
    expect(state).toEqual({ data: [] });
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
