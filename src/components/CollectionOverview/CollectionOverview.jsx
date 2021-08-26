import React from 'react';
import {connect} from 'react-redux';
 
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import {selectCollections} from '../../reducers/selectors';

const CollectionOverview = ({shopCollection}) =>{
  const collectionKeys = Object.keys(shopCollection);
  console.log('collectionKeys', collectionKeys);
  return(
    <div className='collection-overview'>
      {
        collectionKeys.map(key => {
          const itemType = shopCollection[key];
          return <CollectionPreview key={itemType.id} itemType={itemType} size={4}/>
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
   shopCollection: selectCollections(state)
});

export default connect(mapStateToProps)(CollectionOverview);