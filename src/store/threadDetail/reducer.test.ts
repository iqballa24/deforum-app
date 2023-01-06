/**
 * test scenario for threadDetailSlice reducer
 *
 * - threadDetailSlice reducer
 *  - should initially set thread detail to initial state
 *  - should return the thread detail when given receiveThreadDetail action
 *  - should return the thread detail with the new comment when given addNewCommentThread action
 *  - should return the thread detail with the up vote comment when given upVoteComment action
 *  - should return the thread detail with the down vote comment when given downVoteComment action
 *
 */

import store from '@/store';
import { threadDetailAction } from '@/store/threadDetail';

describe('threadDetailSlice reducer', () => {
  beforeEach(() => {
    store.dispatch(threadDetailAction.resetToInitialState());
  });

  it('should initially set thread detail to initial state', () => {
    // arrange
    const initialState = {
      id: '',
      title: '',
      body: '',
      category: '',
      createdAt: '',
      ownerId: '',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      owner: { id: '', avatar: '', email: '', name: '' },
    };

    // action
    const state = store.getState().threadDetail;

    // assert
    expect(state.data).toEqual(initialState);
  });

  it('should return the thread detail when given receiveThreadDetail action', () => {
    // arrange
    const initialState = {
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
      comments: [],
    };

    // action
    store.dispatch(threadDetailAction.receiveThreadDetail(initialState));
    const state = store.getState().threadDetail;

    // assert
    expect(state.data).toEqual(initialState);
  });

  it('should return the thread detail with the new comment when given receiveCommentThread action', () => {
    // arrange
    const payload = {
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
    };

    // action
    store.dispatch(threadDetailAction.addNewCommentThread(payload));
    const state = store.getState().threadDetail;

    // assert
    expect(state.data.comments).toEqual([payload]);
  });

  it('should return the thread detail with the up vote comment when given upVoteComment action', () => {
    // arrange
    const initialState = {
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
    };

    const payload = {
      commentId: 'comment-1',
      ownerId: 'users-1',
    };

    // action
    store.dispatch(threadDetailAction.addNewCommentThread(initialState));
    store.dispatch(threadDetailAction.upVoteComment(payload));
    
    let state = store.getState().threadDetail;
    const isUserDownVote = state.data.comments[0].downVotesBy.includes(
      payload.ownerId
    );
    if (isUserDownVote) {
      store.dispatch(threadDetailAction.downVoteComment(payload));
    }
    state = store.getState().threadDetail;

    // assert
    expect(state.data.comments[0]).toEqual({
      ...initialState,
      upVotesBy: [payload.ownerId],
    });
  });

  it('should return the thread detail with the down vote comment when given downVoteComment action', () => {
    // arrange
    const initialState = {
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
    };

    const payload = {
      commentId: 'comment-1',
      ownerId: 'users-1',
    };

    // action
    store.dispatch(threadDetailAction.addNewCommentThread(initialState));
    store.dispatch(threadDetailAction.downVoteComment(payload));
    
    let state = store.getState().threadDetail;
    const isUserUpVote = state.data.comments[0].upVotesBy.includes(
      payload.ownerId
    );
    if (isUserUpVote) {
      store.dispatch(threadDetailAction.upVoteComment(payload));
    }
    state = store.getState().threadDetail;

    // assert
    expect(state.data.comments[0]).toEqual({
      ...initialState,
      downVotesBy: [payload.ownerId],
    });
  });
});
