const DEV_API_URL = 'https://dev.antrano.com';
const PROD_API_URL = 'https://prod.antrano.com';

const dev = {
    apiURL: DEV_API_URL,
};

const prod = {
    apiURL: PROD_API_URL,
};

const config = __DEV__ ? dev : prod;

export default config;
