import React from 'react';
import './Cart-Item.scss';

const CartItem = ({item:{imageUrl, price, name, count}}) =>{
  return (
    <div className='cart-item'>
      <img className='image' src={imageUrl} alt="item"/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{count} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem