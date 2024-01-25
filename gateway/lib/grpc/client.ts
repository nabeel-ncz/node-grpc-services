import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

function getClient<T>(protofilePath: string, service: string) {
  const PROTO_FILE = `${protofilePath}/${service}.proto`;
  const packgeDef = protoLoader.loadSync(PROTO_FILE);
  const grpcObj = grpc.loadPackageDefinition(packgeDef) as unknown as T;
  return grpcObj;
}

export default getClient;