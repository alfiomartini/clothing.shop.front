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
    <StripeCheckout 
      label = 'Pay Now'
      name = 'CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      description = {`Your total price is $${price}`}
      priceForStripe = {priceForStripe}
      token = {onToken}
      stripeKey = {publishableKey}
    />
  )
}

export default StripeCheckoutButton;