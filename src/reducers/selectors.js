// Memoization is a kind of caching - specifically, saving the results of an expensive calculation, and reusing those results if we see the same inputs later.

// Memoized selector functions are selectors that save the most recent result value, and if you call them multiple times with the same inputs, will return the same result value. If you call them with different inputs than last time, they will recalculate a new result value, cache it, and return the new result.

// The Reselect library provides a createSelector API that will generate memoized selector functions. createSelector accepts one or more "input selector" functions as arguments, plus an "output selector", and returns the new selector function. Every time you call the selector:

// - All "input selectors" are called with all of the arguments
// - If any of the input selector return values have changed, the "output selector" will re-run
// - All of the input selector results become arguments to the output selector
// - The final result of the output selector is cached for next time

import {createSelector} from 'reselect';

import {itemsCount} from '../reducers/reducer_utils';
// input selector
 const getCart = state => state.cart;
 const getUser = state => state.user;
 const getSections = state => state.sections;
 const getCollections = state => state.collections;

// (memoized) selectors

export const selectSections = createSelector(
  // projects (selects) sections field from store (root reducer)
  getSections,
  // select sections field from sections_reducer (state)
  sections => sections.sections
)

// select colections retorns a map (a huge object)
export const selectCollections = createSelector(
  getCollections,
  collections => collections.collections
)

export const selectCollectionsArray = createSelector(
  selectCollections,
  collections => collections? Object.keys(collections).map(key => collections[key]):[]
)

// The code bellow works because collections (SHOP_DATA) is organized as a large
// object (actually a map)
export const selectCollection = collectionName => 
  createSelector(
    selectCollections,
    collections => collections[collectionName]
  )

export const selectCartItems = createSelector(
  getCart,
  cart => cart.cartItems
);

export const selectItemsCount = createSelector(
  selectCartItems,
  items => itemsCount(items)
);

export const selectCartHidden = createSelector(
  getCart,
  cart => cart.hidden
)

export const selectCurrentUser = createSelector(
  getUser,
  user => user.currentUser
)