import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { createUserRequest as _userPackage_createUserRequest, createUserRequest__Output as _userPackage_createUserRequest__Output } from '../userPackage/createUserRequest';
import type { createUserResponse as _userPackage_createUserResponse, createUserResponse__Output as _userPackage_createUserResponse__Output } from '../userPackage/createUserResponse';
import type { getUserRequest as _userPackage_getUserRequest, getUserRequest__Output as _userPackage_getUserRequest__Output } from '../userPackage/getUserRequest';
import type { getUserResponse as _userPackage_getUserResponse, getUserResponse__Output as _userPackage_getUserResponse__Output } from '../userPackage/getUserResponse';
import type { loginUserRequest as _userPackage_loginUserRequest, loginUserRequest__Output as _userPackage_loginUserRequest__Output } from '../userPackage/loginUserRequest';
import type { loginUserResponse as _userPackage_loginUserResponse, loginUserResponse__Output as _userPackage_loginUserResponse__Output } from '../userPackage/loginUserResponse';
export interface UserClient extends grpc.Client {
    createUser(argument: _userPackage_createUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
    createUser(argument: _userPackage_createUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
    createUser(argument: _userPackage_createUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
    createUser(argument: _userPackage_createUserRequest, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
    createUser(argument: _userPackage_createUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
    createUser(argument: _userPackage_createUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
    createUser(argument: _userPackage_createUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
    createUser(argument: _userPackage_createUserRequest, callback: grpc.requestCallback<_userPackage_createUserResponse__Output>): grpc.ClientUnaryCall;
    getUser(argument: _userPackage_getUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_getUserResponse__Output>): grpc.ClientUnaryCall;
    getUser(argument: _userPackage_getUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_getUserResponse__Output>): grpc.ClientUnaryCall;
    getUser(argument: _userPackage_getUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_getUserResponse__Output>): grpc.ClientUnaryCall;
    getUser(argument: _userPackage_getUserRequest, callback: grpc.requestCallback<_userPackage_getUserResponse__Output>): grpc.ClientUnaryCall;
    getUser(argument: _userPackage_getUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_getUserResponse__Output>): grpc.ClientUnaryCall;
    getUser(argument: _userPackage_getUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_getUserResponse__Output>): grpc.ClientUnaryCall;
    getUser(argument: _userPackage_getUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_getUserResponse__Output>): grpc.ClientUnaryCall;
    getUser(argument: _userPackage_getUserRequest, callback: grpc.requestCallback<_userPackage_getUserResponse__Output>): grpc.ClientUnaryCall;
    loginUser(argument: _userPackage_loginUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
    loginUser(argument: _userPackage_loginUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
    loginUser(argument: _userPackage_loginUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
    loginUser(argument: _userPackage_loginUserRequest, callback: grpc.requestCallback<_userPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
    loginUser(argument: _userPackage_loginUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
    loginUser(argument: _userPackage_loginUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
    loginUser(argument: _userPackage_loginUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
    loginUser(argument: _userPackage_loginUserRequest, callback: grpc.requestCallback<_userPackage_loginUserResponse__Output>): grpc.ClientUnaryCall;
}
export interface UserHandlers extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<_userPackage_createUserRequest__Output, _userPackage_createUserResponse>;
    getUser: grpc.handleUnaryCall<_userPackage_getUserRequest__Output, _userPackage_getUserResponse>;
    loginUser: grpc.handleUnaryCall<_userPackage_loginUserRequest__Output, _userPackage_loginUserResponse>;
}
export interface UserDefinition extends grpc.ServiceDefinition {
    createUser: MethodDefinition<_userPackage_createUserRequest, _userPackage_createUserResponse, _userPackage_createUserRequest__Output, _userPackage_createUserResponse__Output>;
    getUser: MethodDefinition<_userPackage_getUserRequest, _userPackage_getUserResponse, _userPackage_getUserRequest__Output, _userPackage_getUserResponse__Output>;
    loginUser: MethodDefinition<_userPackage_loginUserRequest, _userPackage_loginUserResponse, _userPackage_loginUserRequest__Output, _userPackage_loginUserResponse__Output>;
}
