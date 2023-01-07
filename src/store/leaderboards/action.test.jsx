/**
 * skenario test
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  describe,
  it,
  afterEach,
  beforeEach,
  expect,
  jest,
} from '@jest/globals';
import toast from 'react-hot-toast';
import { asyncReceiveLeaderboards } from './action';
import { leaderboardsAction } from './';
import API from '../../lib/service/API';

const fakeLeaderboardsResponse = [
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

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    // backup original implementation
    API._getLeaderboards = API.getLeaderboards;
  });

  afterEach(() => {
    // restore original implementation
    API.getLeaderboards = API._getLeaderboards;

    // delete backup
    delete API._getLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    API.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      leaderboardsAction.receiveLeaderboards(fakeLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    API.getLeaderboards = () => Promise.reject(fakeLeaderboardsResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.error = jest.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
