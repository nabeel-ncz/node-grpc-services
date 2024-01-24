import * as grpc from "@grpc/grpc-js";

export default (server: grpc.Server, port: number) => {
    server.bindAsync(
        `0.0.0.0:${port}`,
        grpc.ServerCredentials.createInsecure(),
        (error, port) => {

            if(error){
                console.log(error);
                return;
            }

            console.log(`gRPC user service listening at ${port}`);
            server.start();
        }
    )
};