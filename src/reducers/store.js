import {createStore, applyMiddleware} from 'redux';

// Redux Persist takes your Redux state object and saves it to persisted storage. Then on app launch it retrieves this persisted state and saves it back to redux.
import {persistStore, persistReducer} from 'redux-persist';

// defaults to localStorage for web
import storage from 'redux-persist/lib/storage'

import rootReducer from './root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



const middleWare = [thunk];

if (process.env.NODE_ENV === 'development'){
  middleWare.push(logger);
}

const persistConfig = {
  key:'root',
  storage:storage,
  whitelist:['cart'] //only 'cart' will be persisted in localStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(...middleWare));

export const persistor = persistStore(store);
