/**
 * Skenario testing
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 * - asyncCreateCommentThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dipacth action and call alert correctly when data fetching failed
 *
 */

import store from '@/store';
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
import { asyncReceiveThreadDetail, asyncCreateCommentThread } from './action';
import { threadDetailAction } from './';
import API from '@/lib/service/API';

const fakeThreadDetailResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://generated-image-url.jpg',
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    // backup original implementation
    API._getThreadDetail = API.getThreadDetail;
  });

  afterEach(() => {
    // restore original implementation
    API.getThreadDetail = API._getThreadDetail;

    // delete backup
    delete API._getThreadDetail;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    API.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);

    // mock dispacth
    const dispatch = jest.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // asserts
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      threadDetailAction.receiveThreadDetail(fakeThreadDetailResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    API.getThreadDetail = () => Promise.reject(fakeThreadDetailResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.error = jest.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

const fakeCreateCommentResponse = {
  id: 'comment-1',
  content: 'Ini adalah komentar pertama',
  createdAt: '2021-06-21T07:00:00.000Z',
  upVotesBy: [],
  downVotesBy: [],
  owner: {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
  },
};

describe('asyncCreateCommentThread thunk', () => {
  beforeEach(() => {
    // backup original implementation
    API._createCommentThread = API.createCommentThread;
  });

  afterEach(() => {
    // restore original implementation
    API.createCommentThread = API._createCommentThread;

    // delete backup
    delete API._createCommentThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    API.createCommentThread = () => Promise.resolve(fakeCreateCommentResponse);

    // mock dispacth
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);

    // action
    await asyncCreateCommentThread()(dispatch, getState);

    // asserts
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      threadDetailAction.addNewCommentThread(fakeCreateCommentResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    API.createCommentThread = () => Promise.reject(fakeCreateCommentResponse);

    // mock dispatch
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);

    // mock alert
    toast.error = jest.fn();

    // action
    await asyncCreateCommentThread()(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
