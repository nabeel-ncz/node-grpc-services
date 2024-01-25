import * as grpc from "@grpc/grpc-js";
import { ProtoGrpcType } from "@muhammed_nabeel/grpcshop/proto/users";
import loadServiceDefinition from "../lib/grpc/loadServiceDefinition";
import getClient from "../lib/grpc/client";
import config from "../config/config";

const { userPackage } = loadServiceDefinition<ProtoGrpcType>("./node_modules/@muhammed_nabeel/grpcshop/protos", "users");
const { service } = userPackage.User;

const client = getClient<ProtoGrpcType>("./node_modules/@muhammed_nabeel/grpcshop/protos", "users");
const userClient = new client.userPackage.User(`localhost:${config.port.user_service}`, grpc.credentials.createInsecure());

const handlers = {
    CreateUser(call: any, callback: Function){
        userClient.createUser(call.request, (error, response) => {
            callback(error, response);
        })
    },
    LoginUser(call: any, callback: Function){
        userClient.loginUser(call.request, (error, response) => {
            callback(error, response);
        })
    },
    GetUser(call: any, callback: Function){
        userClient.loginUser(call.request, (error, response) => {
            callback(error, response);
        })
    }
}

export default {
    service,
    handlers
};