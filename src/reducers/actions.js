// user actions
import {SET_CURRENT_USER} from './action_types';
import {TOGGLE_CART_HIDDEN} from './action_types';
import {ADD_CART_ITEM} from './action_types';
import {REMOVE_CART_ITEM} from './action_types';
import {DEC_ITEM_COUNT} from './action_types';
import {UPDATE_SHOP_DATA} from './action_types';
import {FETCH_COLLECTION_ERROR, FETCH_COLLECTION_FINISHED, FETCH_COLLECTION_STARTED} from './action_types';

import {firestore, transformCollectionToMap} from '../firebase/firebase.utils';

// synchronous acctions for async action
const fetchCollectionStarted = () => ({
  type: FETCH_COLLECTION_STARTED
});

const fetchCollectionFinished = (collection) => ({
  type: FETCH_COLLECTION_FINISHED,
  payload: collection
});

const fetchCollectionError = (errorMessage) => ({
  type: FETCH_COLLECTION_ERROR,
  payload: errorMessage
});

// asynchronous (thunk) action

export const updateCollectionAsync = () => {
  return dispatch =>{
    dispatch(fetchCollectionStarted());

    const collectionRef = firestore.collection('collections');
    collectionRef.get()
    .then(collection => {
      const map = transformCollectionToMap(collection.docs);
      dispatch(fetchCollectionFinished(map))
    })
    .catch(error => dispatch(fetchCollectionError(error.message)));
  }
}

// synchronus actions

export const updateShopData = collection => ({
  type:UPDATE_SHOP_DATA,
  payload:collection
});

export const setCurrentUser = user => ({
  type:SET_CURRENT_USER,
  payload: user
});

export const toggleCartHidden = () => ({
  type:TOGGLE_CART_HIDDEN
});

export const addCartItem = (item) => ({
  type:ADD_CART_ITEM,
  payload: item
});

export const removeCartItem = (item) => ({
  type:REMOVE_CART_ITEM,
  payload:item
});

export const decItemCount = (item) => ({
    type: DEC_ITEM_COUNT,
    payload: item
});