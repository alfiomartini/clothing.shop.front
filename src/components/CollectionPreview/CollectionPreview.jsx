import React from 'react';
// import '../../styles/CollectionPreview.scss';

import {connect} from 'react-redux';
import {addCartItem} from '../../reducers/actions';

import {CollectionBox, InvisibleBtn, Preview, 
        PreviewItem, Description, Image} from './CollectionPreviewStyles';

const CollectionPreview = ({itemType, addItem, size}) => {
  const {items, title} = itemType; 
  return(
    <CollectionBox>
      <h1 className="title">{title.toUpperCase()}</h1>
      <Preview>
        {
          items.filter((item, index) => index < Number(size))
          .map((item, index) => (
            <PreviewItem key={index}>
              <Image
                style = {{backgroundImage:`url(${item.imageUrl})`}}
              />
              <Description>
                <div key={item.id}>{item.name}</div>
                <div>${item.price}</div>
              </Description>
              <InvisibleBtn onClick={() => addItem(item)}
              >
                Add to Cart
              </InvisibleBtn>
            </PreviewItem>
          ))
        }
      </Preview>
    </CollectionBox>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addCartItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionPreview);