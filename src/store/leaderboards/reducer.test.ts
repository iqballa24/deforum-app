/**
 * test sceanrio for leaderboardsSlice reducer
 *
 * - leaderboardSlice reducer
 *  - should return the initial state when passed an empty action
 *  - should return the leaderboards when given receiveLeaderboards action
 *
 */

import store from '@/store';
import leaderboardsSlice, { leaderboardsAction } from '@/store/leaderboards';

describe('leaderboardSlice reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    // arrange
    const initialState = undefined;
    const action = { type: '' };

    // action
    const state = leaderboardsSlice.reducer(initialState, action);

    // assert
    expect(state).toEqual({ data: [] });
  });

  it('Should return the leaderboards when given receiveLeaderboards action', () => {
    // arrange
    const initialState = [
      {
        user: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
        score: 10,
      },
    ];

    // action
    store.dispatch(leaderboardsAction.receiveLeaderboards(initialState));
    const state = store.getState().leaderboards;

    // assert
    expect(state.data).toEqual(initialState);
  });
});
