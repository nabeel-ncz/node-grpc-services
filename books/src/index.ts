import config from "./config/config";
import * as grpc from "@grpc/grpc-js";
import initializeServer from "./lib/grpc/server";
import { handlers, service } from "./services/index";

const server = new grpc.Server();
server.addService(service, handlers);

initializeServer(server, config.grpc.port);