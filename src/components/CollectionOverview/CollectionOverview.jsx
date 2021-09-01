import React from 'react';
import {connect} from 'react-redux';
 
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import {selectCollectionsArray} from '../../reducers/selectors';

const CollectionOverview = ({collectionsArray}) =>{
  return(
    <div className='collection-overview'>
      {
        collectionsArray.map(collection => {
          return <CollectionPreview key={collection.id} itemType={collection} size={4}/>
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
  //  shopCollection: selectCollections(state),
   collectionsArray: selectCollectionsArray(state)
});

export default connect(mapStateToProps)(CollectionOverview);