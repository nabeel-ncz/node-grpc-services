require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
const GRPC_PORT = process.env.GRPC_PORT ? Number(process.env.GRPC_PORT) : 8080;
const PATH_TO_PROTO = process.env.PATH_TO_PROTO_FILE;

export default {
    mongo: {
        uri: MONGO_URI
    },
    grpc: {
        port: GRPC_PORT,
        protofilePath: PATH_TO_PROTO
    }
};