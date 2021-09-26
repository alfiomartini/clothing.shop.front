import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

// This was an experiment with a rudimentary server, that serves up 
//  the publick stripe key using the fetch promise api

const URL_DEV = 'http://localhost:3100/stripe';

class StripeCheckoutButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stripeKey:null
    }
  }


  // this version of the server is wrong, because I am fetching the publishable key
  // (which is public), instead of fetching the secret key (which must be hidden in the server)

  fetchStripe = () => {
    return  fetch(URL_DEV)
    .then(resp => resp.json())
    .then(stripeKey => {
      this.setState({stripeKey:stripeKey}, ()=>{
      console.log('stripe key fetched from server')
      })
    })
    .catch(error => console.log('stripe error', error.message))
  }
  componentDidMount(){
    this.fetchStripe();
  }


  onToken = token => {
    console.log(token);
    console.log('Payment Successful!')
  }

  render(){
    const {price} = this.props;
    const stripeKey = this.state.stripeKey;
    const priceForStripe = price * 100;
    console.log('stripe key fetched?', stripeKey!== null);
    return !stripeKey? null : (
        <StripeCheckout 
          label = 'Pay Now'
          name = 'Clothing Shop Ltd.'
          billingAddress
          shippingAddress
          description = {`Your total price is $${price}`}
          priceForStripe = {priceForStripe}
          token = {this.onToken}
          stripeKey = {stripeKey}
        />
      )
  }
}
 

export default StripeCheckoutButton;