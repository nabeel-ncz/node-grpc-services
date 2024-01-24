import loadServiceDefinition from "../lib/grpc/load-service-definition";
import { BookHandlers } from "../lib/proto/bookPackage/Book";
import { ProtoGrpcType } from "../lib/proto/books";
import {
    createBookHandler,
    getAllBooksHandler
} from "../handlers"

const { bookPackage } = loadServiceDefinition<ProtoGrpcType>("books");
const { service } = bookPackage.Book;

const handlers: BookHandlers = {

    async createBook(call, callback) {
        const response = await createBookHandler(call.request);
        callback(null, response);
    },

    async getAllBooks(call, callback) {
        const response = await getAllBooksHandler();
        callback(null, response);
    }

}

export {
    handlers, 
    service
}