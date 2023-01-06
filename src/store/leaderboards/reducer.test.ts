/**
 * test sceanrio for leaderboardsSlice reducer
 *
 * - leaderboardSlice reducer
 *  - should initially set leaderboards to initial state
 *  - should return the leaderboards when given receiveLeaderboards action
 *
 */

import store from '@/store';
import { leaderboardsAction } from '@/store/leaderboards';
import { leaderBoardsItem } from '@/lib/types';

describe('leaderboardSlice reducer', () => {
  it('Should initially set leaderboards to initial state', () => {
    // arrange
    const initialState: leaderBoardsItem[] = [];

    // action
    const state = store.getState().leaderboards;

    // assert
    expect(state.data).toEqual(initialState);
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
