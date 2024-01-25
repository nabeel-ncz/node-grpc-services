import * as grpc from "@grpc/grpc-js";
import { ProtoGrpcType } from "@muhammed_nabeel/grpcshop/proto/books";
import loadServiceDefinition from "../lib/grpc/loadServiceDefinition";
import getClient from "../lib/grpc/client";
import config from "../config/config";

const { bookPackage } = loadServiceDefinition<ProtoGrpcType>("./node_modules/@muhammed_nabeel/grpcshop/protos", "books");
const { service } = bookPackage.Book;

const client = getClient<ProtoGrpcType>("./node_modules/@muhammed_nabeel/grpcshop/protos", "books");
const bookClient = new client.bookPackage.Book(`localhost:${config.port.product_service}`, grpc.credentials.createInsecure());

const handlers = {
    CreateBook(call: any, callback: Function){
        bookClient.createBook(call.request, (error, response) => {
            callback(error, response);
        })
    },
    GetAllBooks(call: any, callback: Function){
        bookClient.getAllBooks(call.request, (error, response) => {
            callback(error, response);
        })
    },
}

export default {
    service,
    handlers
};