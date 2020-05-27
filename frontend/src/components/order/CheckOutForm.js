import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Button } from 'semantic-ui-react'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#242f3e',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#c4f0ff',
      },
      '::placeholder': {
        color: '#c4f0ff',
      },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
    
        const cardElement = elements.getElement(CardElement);
    
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
          console.log('[error]', error);
        } else {
          
          console.log('[PaymentMethod]', paymentMethod);
          props.saveOrder()
        }
      };

    return (
        <form onSubmit={handleSubmit}>
          <CardElement 
          options={CARD_OPTIONS}
        />
          <Button 
            type="submit" 
            disabled={!stripe}
            compact
            primary
            fluid
          >
            Pay
          </Button>
        </form>
      );
};

export default CheckoutForm;