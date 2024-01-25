import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

export default function <T>(protofilePath: string, service: string) {
    const PROTO_FILE = `${protofilePath}/${service.toLowerCase()}.proto`;
    const packgeDef = protoLoader.loadSync(PROTO_FILE);
    const grpcObj = grpc.loadPackageDefinition(packgeDef) as unknown as T;
    return grpcObj;
}
