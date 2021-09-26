import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './Cart-Dropdown.scss';

import CustomButtom from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import {selectCartItems} from '../../reducers/selectors';
import {toggleCartHidden} from '../../reducers/actions';

// https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom


const CartDropdown = ({cartItems, history, toggleCart}) => {
  // console.log('cartItems',  cartItems);
  const cartItemList = cartItems.map(item => {
    return <CartItem item = {item} key={item.id}/>
  });
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.length > 0 
          ?<div>{cartItemList}</div>
          : <div className='cart-empty'>Your cart is empty</div>  
        }
      </div>
      <CustomButtom onClick={()=>{
        toggleCart();
        history.push('/checkout')
      }
      }>
        Go to Checkout
      </CustomButtom>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems:selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));