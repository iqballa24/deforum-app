/**
 * test scenario for categorySlice reducer
 *
 * - categorySlice reducer function
 *  - should return the initial state when passed an empty action
 *  - should return the category when given receiveListCategory action
 *
 */

import store from '@/store';
import categorySlice, { categoryActions } from '@/store/category';

describe('categorySlice reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    // arrange
    const initialState = undefined;
    const action = { type: '' };

    // action
    const state = categorySlice.reducer(initialState, action);

    // assert
    expect(state).toEqual({ data: [] });
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
