import React from 'react';
// import '../../styles/CollectionPreview.scss';

import {connect} from 'react-redux';
import {addCartItem} from '../../reducers/actions';

import {CollectionBox, InvisibleBtn, Preview, 
        PreviewItem, Description, Image} from './CollectionPreviewStyles';

import {withRouter} from 'react-router-dom';

const CollectionPreview = ({itemType, addItem, size, history, match}) => {
  const {items, title, routeName} = itemType; 
  const path = `${match.url}/${routeName}`;
  const updatePath = () => {
    if (match.url === '/shop') history.push(path);
  }
  return(
    <CollectionBox>
      <h1 className="title" onClick={updatePath}>{title.toUpperCase()}</h1>
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
export default connect(null, mapDispatchToProps)(withRouter(CollectionPreview));