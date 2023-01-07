/**
 * Skenario testing
 *
 * - asyncRegisterUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 */

import store from '@/store';
import API from '@/lib/service/API';
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
import { asyncRegisterUser } from './action';

const fakeUsersRegisterResponse = {
  user: {
    id: 'user-123',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    // backup original implementation
    API._register = API.register;
  });

  afterEach(() => {
    // restore original implementation
    API.register = API._register;

    // delete backup
    delete API._register;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    const payload = {
      name: 'tester',
      email: 'tester24@gmail.com',
      password: 'Tester24',
    };
    // stub implementation
    API.register = () => Promise.resolve(fakeUsersRegisterResponse);

    // mock dispacth
    const dispatch = jest.fn();

    // action
    await asyncRegisterUser(payload)(dispatch);

    // asserts
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    const payload = {
      name: 'tester',
      email: 'tester24@gmail.com',
      password: 'Tester24',
    };
    // stub implementation
    API.register = () => Promise.reject(fakeUsersRegisterResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.error = jest.fn();

    // action
    await asyncRegisterUser(payload)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
