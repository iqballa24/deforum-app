/**
 * skenario test
 *
 * - asyncPopulateUsersAndTalks thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { describe, it, afterEach, beforeEach, expect, jest} from '@jest/globals';
import toast from 'react-hot-toast';
import { asyncPopulateUsersAndThreads } from './action';
import { threadsAction } from '../threads';
import { usersAction } from '../users';
import API from '../../lib/service/API';

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original implementation
    API._getAllThreads = API.getAllThreads;
    API._getAllTalks = API.getAllTalks;
  });

  afterEach(() => {
    // restore original implementation
    API.getAllThreads = API._getAllThreads;
    API.getAllTalks = API._getAllTalks;

    // delete backup
    delete API._getAllThreads;
    delete API._getAllTalks;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    API.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    API.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      threadsAction.receiveThreads(fakeThreadsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      usersAction.receiveUsers(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    API.getAllUsers = () => Promise.reject(fakeUsersResponse);
    API.getAllThreads = () => Promise.reject(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.error = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
