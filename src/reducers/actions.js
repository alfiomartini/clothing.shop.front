// user actions
import {SET_CURRENT_USER} from './action_types';
import {TOGGLE_CART_HIDDEN} from './action_types';
import {ADD_CART_ITEM} from './action_types';
import {REMOVE_CART_ITEM} from './action_types';
import {DEC_ITEM_COUNT} from './action_types';


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