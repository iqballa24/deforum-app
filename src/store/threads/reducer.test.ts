/**
 * test scenario for threadSlice reducer
 *
 * - threadSlice reducer
 *  - should return the initial state when passed an empty action
 *  - should return the threads when given receiveThreads action
 *  - should return the threads with new thread when given addThreads action
 *  - should return threads with up vote thread when given upVoteThread action
 *  - should return threads with down vote thread when given downVoteThread action
 *
 */

import store from '@/store';
import threadsSlice, { threadsAction } from '@/store/threads';

describe('threads reducer', () => {
  beforeEach(() => {
    store.dispatch(threadsAction.resetToInitialState());
  });

  it('should return the initial state when passed an empty action', () => {
    // arrange
    const initialState = undefined;
    const action = { type: '' };

    // action
    const state = threadsSlice.reducer(initialState, action);

    // assert
    expect(state).toEqual({ data: [] });
  });

  it('should return the threads when given receiveThreads action', () => {
    // arrange
    const initialState = [
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

    // action
    store.dispatch(threadsAction.receiveThreads(initialState));
    const state = store.getState().threads;

    // assert
    expect(state.data).toEqual(initialState);
  });

  it('should return the threads with new thread when given addThreads action', () => {
    // arrange
    const payload = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    };

    // action
    store.dispatch(threadsAction.addThreads(payload));
    const state = store.getState().threads;

    // assert
    expect(state.data).toEqual([payload]);
  });

  it('should return the threads with up vote thread when given upVoteThread action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    };

    const payload = { threadId: 'thread-1', ownerId: 'users-1' };

    // action
    store.dispatch(threadsAction.addThreads(initialState));
    store.dispatch(threadsAction.upVoteThread(payload));

    let state = store.getState().threads;
    const isUserDownVote = state.data[0].downVotesBy.includes(payload.ownerId);
    if (isUserDownVote) {
      store.dispatch(threadsAction.downVoteThread(payload));
    }
    state = store.getState().threads;

    // assert
    expect(state.data[0]).toEqual({
      ...initialState,
      upVotesBy: [payload.ownerId],
    });
  });

  it('should return the threads with down vote thread when given downVoteThread action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    };

    const payload = { threadId: 'thread-1', ownerId: 'users-1' };

    // action
    store.dispatch(threadsAction.addThreads(initialState));
    store.dispatch(threadsAction.downVoteThread(payload));

    let state = store.getState().threads;
    const isUserUpVote = state.data[0].upVotesBy.includes(payload.ownerId);
    if (isUserUpVote) {
      store.dispatch(threadsAction.upVoteThread(payload));
    }
    state = store.getState().threads;

    // assert
    expect(state.data[0]).toEqual({
      ...initialState,
      downVotesBy: [payload.ownerId],
    });
  });
});
