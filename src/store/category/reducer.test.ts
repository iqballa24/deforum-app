/**
 * test scenario for categorySlice reducer
 *
 * - categorySlice reducer function
 *  - should initially set category to initial state
 *  - should return the category when given receiveListCategory action
 *
 */

import store from '@/store';
import { categoryActions } from '@/store/category';

describe('categorySlice reducer', () => {
  it('Should initially set category to initial state', () => {
    // arrange
    const initialState: string[] = [];

    // action
    const state = store.getState().category;

    // assert
    expect(state.data).toEqual(initialState);
  });

  it('Should return the category when given receiveListCategory action', () => {
    // arrange
    const initialState = ['react', 'introduction'];

    // action
    store.dispatch(categoryActions.receiveListCategory(initialState));
    const state = store.getState().category;

    // assert
    expect(state.data).toEqual(initialState);
  });
});
