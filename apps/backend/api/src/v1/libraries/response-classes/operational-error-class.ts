import { ApiResponseErrorType } from "./api-response-classes";

export type httpStatusCodeType = 200 | 201 | 400 | 500;

export type OperationErrorType = {
  httpStatusCode: httpStatusCodeType;
  message: string;
  errors?: ApiResponseErrorType;
};

export class OperationalError extends Error implements OperationErrorType {
  public readonly httpStatusCode: httpStatusCodeType;
  public readonly errors: ApiResponseErrorType;

  constructor(httpStatusCode: httpStatusCodeType, message: string, errors: ApiResponseErrorType) {
    super(message);
    this.httpStatusCode = httpStatusCode;
    this.errors = errors;
  }
}
