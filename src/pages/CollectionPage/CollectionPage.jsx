import React from 'react';
import {connect} from 'react-redux';

import {selectCollections} from '../../reducers/selectors';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

// Perhaps I should normalize data (suing objects instead of arrays) and use hashing 
// so as to find the required collection

const CollectionPage = ({match, SHOP_DATA}) => {
  // console.log('match, collection', match, collection);
  // console.log('shop data, match', SHOP_DATA, match);
  const routeName = match.params.collectionName;
  const item = SHOP_DATA.find(collection => collection.routeName === routeName);
  // console.log('collection', item)
  if (item) {
    return  <CollectionPreview itemType={item} size={10}/> 
  }
  else {
    return null
  }
}

// const mapStateToProps = (state, ownProps) => {
//   console.log('own props', ownProps);
//   return ({
//     collection: selectCollection(ownProps.match.params.collectionName)(state)
//   });
// } 

const mapStateToProps = state => ({
  SHOP_DATA: selectCollections(state)
});

export default connect(mapStateToProps)(CollectionPage)