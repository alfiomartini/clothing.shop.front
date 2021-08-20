import {DEC_ITEM_COUNT, REMOVE_CART_ITEM, TOGGLE_CART_HIDDEN} from './action_types';
import {ADD_CART_ITEM} from './action_types';
import {addItemToCart} from './reducer_utils';
import {removeItemFromCart} from './reducer_utils';
import {decItemQuantity} from './reducer_utils';

const INITIAL_STATE = {
  hidden : true,
  cartItems : []
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden:!state.hidden
      };
    case  ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case DEC_ITEM_COUNT:
      return {
        ...state,
        cartItems: decItemQuantity(state.cartItems, action.payload)
      };
    default: return state;
  }
}

export default cartReducer