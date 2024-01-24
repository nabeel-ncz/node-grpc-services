// Original file: proto/books.proto

import type { Long } from '@grpc/proto-loader';

export interface createBookRequest {
  'userId'?: (string);
  'title'?: (string);
  'description'?: (string);
  'price'?: (number | string | Long);
}

export interface createBookRequest__Output {
  'userId'?: (string);
  'title'?: (string);
  'description'?: (string);
  'price'?: (Long);
}
