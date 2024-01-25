import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';
import type { BookClient as _bookPackage_BookClient, BookDefinition as _bookPackage_BookDefinition } from './bookPackage/Book';
type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
    new (...args: ConstructorParameters<Constructor>): Subtype;
};
export interface ProtoGrpcType {
    bookPackage: {
        Book: SubtypeConstructor<typeof grpc.Client, _bookPackage_BookClient> & {
            service: _bookPackage_BookDefinition;
        };
        createBookRequest: MessageTypeDefinition;
        createBookResponse: MessageTypeDefinition;
        getAllBooksResponse: MessageTypeDefinition;
    };
    google: {
        protobuf: {
            Empty: MessageTypeDefinition;
        };
    };
}
export {};
