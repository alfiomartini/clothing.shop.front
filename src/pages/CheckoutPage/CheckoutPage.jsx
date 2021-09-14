import React from 'react';
import {connect} from 'react-redux'

import './CheckoutPage.scss';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import {selectCartItems} from '../../reducers/selectors';
import {checkoutTotal} from '../../reducers/reducer_utils';
import StripeCheckoutButton from '../../components/StripeCheckout/StripeCheckoutButton';



const CheckoutPage = ({cartItems}) => {
  const total = checkoutTotal(cartItems)
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block"> Quantity</div>
        <div className="header-block"> Price</div>
        <div className="header-block"> Remove</div>
      </div>
      <div className='checkout-list'>
        {
          cartItems.map(item => {
            return <CheckoutItem key={item.id} item = {item} />
          })
        } 
      </div>
      <div className='checkout-total'>
        Total: ${total}
      </div>
      <StripeCheckoutButton price={total} />
      <div className='card-message'>
        <h3>Please, use the following test credit card for  payments 
        </h3>
        <h3>
          Visa: 4242 4242 4242 4242 EXP: 09/2021 CVC:555
        </h3>
      </div>
     
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems:selectCartItems(state)
})
export default connect(mapStateToProps)(CheckoutPage);