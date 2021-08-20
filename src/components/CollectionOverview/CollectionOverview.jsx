import React from 'react';
import {connect} from 'react-redux';
 
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import {selectCollections} from '../../reducers/selectors';

const CollectionOverview = ({SHOP_DATA}) =>{
  return(
    <div className='collection-overview'>
      {
        SHOP_DATA.map(itemType => (
          <CollectionPreview key={itemType.id} itemType={itemType} size={4}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
   SHOP_DATA: selectCollections(state)
});

export default connect(mapStateToProps)(CollectionOverview);