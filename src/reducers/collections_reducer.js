import SHOP_DATA from '../assets/ShopData.js';

const INITIAL_STATE = {
  collections:SHOP_DATA
}

// console.log('INITIAL state', INITIAL_STATE)
const collectionsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    default: return state;
  }
}

export default collectionsReducer;