import React from 'react';
import {connect} from 'react-redux'

import './CheckoutPage.scss';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import {selectCartItems, selectCurrentUser} from '../../reducers/selectors';
import {checkoutTotal} from '../../reducers/reducer_utils';
import StripeCheckoutButton from '../../components/StripeCheckout/StripeCheckoutButton';

import { withRouter } from 'react-router-dom';

const CheckoutPage = ({cartItems, currentUser, history}) => {

  const ButtonSignIn = () => (
    <button className="button-signin"
      onClick = {() =>history.push('/signin')}>
      please sign in before checking out
    </button>
  )

  const total = checkoutTotal(cartItems);
  console.log('Current User', currentUser);
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
      { currentUser && <StripeCheckoutButton price={total} /> }
      {!currentUser && <ButtonSignIn />}
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems:selectCartItems(state),
  currentUser: selectCurrentUser(state)
})
export default withRouter(connect(mapStateToProps)(CheckoutPage));