import React from 'react';
import {connect} from 'react-redux';

import {selectCollections, selectCollection} from '../../reducers/selectors';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

// Perhaps I should normalize data (suing objects instead of arrays) and use hashing 
// so as to find the required collection. Done!

const CollectionPage = ({shopCollection, collection}) => {
  const item = collection;
  if (item) {
    return  <CollectionPreview itemType={item} size={10}/> 
  }
  else {
    return null
  }
}

// https://stackoverflow.com/questions/47647070/what-is-ownprops-in-react-redux
// ownProps is the name redux gives to React props
const mapStateToProps = (state, ownProps) => ({
  shopCollection: selectCollections(state),
  collection: selectCollection(ownProps.match.params.collectionName)(state)
});

export default connect(mapStateToProps)(CollectionPage)