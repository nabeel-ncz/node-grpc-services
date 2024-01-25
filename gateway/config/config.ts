require('dotenv').config();

const USER_SERVICE_PORT = Number(process.env.USER_SERVICE_PORT);
const PRODUCT_SERVICE_PORT = Number(process.env.PRODUCT_SERVICE_PORT);
const GATEWAY_PORT = Number(process.env.GATEWAY_PORT);

export default {
    port: {
        user_service: USER_SERVICE_PORT,
        product_service: PRODUCT_SERVICE_PORT,
        gateway: GATEWAY_PORT
    }
};