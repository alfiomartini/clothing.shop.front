import userReducer from  './user_reducer';
import cartReducer from './cart_reducer';
import sectionsReducer from './sections_reducer'
import collectionsReducer from './collections_reducer';

import {combineReducers} from 'redux';

const rootReducer =  combineReducers({
  user: userReducer,
  cart: cartReducer,
  sections: sectionsReducer,
  collections: collectionsReducer
});

export default rootReducer;