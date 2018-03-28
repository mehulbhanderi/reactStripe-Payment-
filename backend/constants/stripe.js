const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_lf4oWPyiFAV64o9JzytGRNhz'
    : 'sk_test_lf4oWPyiFAV64o9JzytGRNhz';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;