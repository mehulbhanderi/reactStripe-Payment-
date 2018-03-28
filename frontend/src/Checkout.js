import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';
import {emojify} from 'react-emojione';


console.log('PK test: ', STRIPE_PUBLISHABLE);
const CURRENCY = 'INR';
const fromrstopaisa = amount => amount * 100;

const successPayment = data => {
    alert("paymennt successful");
    console.log(data);
};
const errorPayment = data => {
    let emojialert=emojify(' :angry: :angry: :angry: :angry: :angry:  :angry: :angry:', {output: 'unicode'})
    alert(`remember your card number ${emojialert}`);
    console.log(data);
};

const onToken = (amount, description) => token =>
    axios.post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromrstopaisa(amount)
    }).then(successPayment)
        .catch(errorPayment);

const Checkout = ({name, description, amount}) =>
    <StripeCheckout
        name={name}
        description={description}
        amount={fromrstopaisa(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
    />
export default Checkout