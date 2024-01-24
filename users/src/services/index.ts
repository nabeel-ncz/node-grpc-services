import loadServiceDefinition from "../lib/grpc/load-service-definition";
import { UserHandlers } from "../lib/proto/userPackage/User";
import { ProtoGrpcType } from "../lib/proto/users";
import {
    createUserHandler,
    loginUserHandler,
    getUserHandler
} from "../handlers"

const { userPackage } = loadServiceDefinition<ProtoGrpcType>("users");
const { service } = userPackage.User;

const handlers: UserHandlers = {

    async createUser(call, callback) {
        const response = await createUserHandler(call.request);
        callback(null, response);
    },

    async loginUser(call, callback) {
        const response = await loginUserHandler(call.request);
        callback(null, response);
    },

    async getUser(call, callback) {
        const response = await getUserHandler(call.request);
        callback(null, response);
    }

}

export {
    handlers, 
    service
}