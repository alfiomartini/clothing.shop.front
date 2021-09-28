import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IiskwEgHijewZB6RGMR7aItlDLG4DmwSGAIpfByaeL8WWBepd22G14Kgwuvb4rRht2QX2c6LmELKdu1Q8TYFfgv00q3nDrRFu';

  const onToken = token => {
    console.log(token);
    console.log('Payment Successful!')
  }

  return (
    <div>
      <StripeCheckout 
        label = 'Pay Now'
        name = 'Clothing Shop Ltd.'
        billingAddress
        shippingAddress
        description = {`Your total price is $${price}`}
        priceForStripe = {priceForStripe}
        token = {onToken}
        stripeKey = {publishableKey}
        className='stripe-checkout' />
      <div className='card-message'>
        <h3>Please, use the following test credit card for  payments 
        </h3>
        <h3>
          Visa: 4242 4242 4242 4242 EXP: 09/2025 CVC:555
        </h3>
      </div>
    </div>
  )
}

export default StripeCheckoutButton;