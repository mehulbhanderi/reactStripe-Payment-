
const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? 'pk_test_hnvld14g3v1UrWEik00yjXKK'
    : 'pk_test_hnvld14g3v1UrWEik00yjXKK';
export default STRIPE_PUBLISHABLE;