// Original file: proto/books.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { createBookRequest as _bookPackage_createBookRequest, createBookRequest__Output as _bookPackage_createBookRequest__Output } from '../bookPackage/createBookRequest';
import type { createBookResponse as _bookPackage_createBookResponse, createBookResponse__Output as _bookPackage_createBookResponse__Output } from '../bookPackage/createBookResponse';
import type { getAllBooksResponse as _bookPackage_getAllBooksResponse, getAllBooksResponse__Output as _bookPackage_getAllBooksResponse__Output } from '../bookPackage/getAllBooksResponse';

export interface BookClient extends grpc.Client {
  createBook(argument: _bookPackage_createBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_createBookResponse__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_createBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_createBookResponse__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_createBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_createBookResponse__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_createBookRequest, callback: grpc.requestCallback<_bookPackage_createBookResponse__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_createBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_createBookResponse__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_createBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_createBookResponse__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_createBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_createBookResponse__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_createBookRequest, callback: grpc.requestCallback<_bookPackage_createBookResponse__Output>): grpc.ClientUnaryCall;
  
  getAllBooks(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_getAllBooksResponse__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_getAllBooksResponse__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_getAllBooksResponse__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_bookPackage_getAllBooksResponse__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_getAllBooksResponse__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_getAllBooksResponse__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_getAllBooksResponse__Output>): grpc.ClientUnaryCall;
  getAllBooks(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_bookPackage_getAllBooksResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface BookHandlers extends grpc.UntypedServiceImplementation {
  createBook: grpc.handleUnaryCall<_bookPackage_createBookRequest__Output, _bookPackage_createBookResponse>;
  
  getAllBooks: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _bookPackage_getAllBooksResponse>;
  
}

export interface BookDefinition extends grpc.ServiceDefinition {
  createBook: MethodDefinition<_bookPackage_createBookRequest, _bookPackage_createBookResponse, _bookPackage_createBookRequest__Output, _bookPackage_createBookResponse__Output>
  getAllBooks: MethodDefinition<_google_protobuf_Empty, _bookPackage_getAllBooksResponse, _google_protobuf_Empty__Output, _bookPackage_getAllBooksResponse__Output>
}
