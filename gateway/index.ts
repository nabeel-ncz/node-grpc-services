import * as grpc from "@grpc/grpc-js";
import UserService from "./services/users";
import BookSservice from "./services/books";
import config from "./config/config";

const server = new grpc.Server();

server.addService(UserService.service, UserService.handlers);
server.addService(BookSservice.service, BookSservice.handlers);

server.bindAsync(
    `0.0.0.0:${config.port.gateway}`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(`Server listening on port ${port}`);
        server.start();
    }
)