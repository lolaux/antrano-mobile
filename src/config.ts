const DEV_API_URL = 'http://ec2-3-12-154-181.us-east-2.compute.amazonaws.com:5000/api/';
const PROD_API_URL = 'http://ec2-3-12-154-181.us-east-2.compute.amazonaws.com:5000/api/';
const IMAGE_BASE_URL = "http://3.21.185.32:3000/images/product/";
const IMAGE_BASE_BANNER = "http://3.21.185.32:3000/images/banner/"

const dev = {
    apiURL: DEV_API_URL,
};

const prod = {
    apiURL: PROD_API_URL,
};

const config = __DEV__ ? dev : prod;

export default config;
