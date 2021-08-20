import React from 'react';
import {connect} from 'react-redux';

import {removeCartItem} from '../../reducers/actions';
import {addCartItem} from '../../reducers/actions';
import {decItemCount} from '../../reducers/actions';

import '../../styles/CheckoutItem.scss';

const CheckoutItem = ({item, removeItem, addToCart, decCount}) => {
  const {name, price, count, imageUrl} = item;
  return (
    <div className='checkout-item'>
      <div className='image'>
        <img  src={imageUrl} alt={name}/>
      </div>
      <span className='checkout-row-item'>{name}</span>
      <span className='checkout-row-item'>
        <span className='dec-btn' onClick={() => decCount(item)}>&#x276E;</span>  
           {count} 
        <span className='inc-btn' onClick={()=>addToCart(item)}>&#x276F;</span>
      </span>
      <span className='checkout-row-item'>${price}</span>
      <span className='checkout-row-item remove-btn' onClick={()=> removeItem(item)}>&#x2715;</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem : (item) => dispatch(removeCartItem(item)),
  addToCart: (item) => dispatch(addCartItem(item)),
  decCount: (item) => dispatch(decItemCount(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);