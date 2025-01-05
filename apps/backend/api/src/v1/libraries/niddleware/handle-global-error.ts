import { Request, Response, NextFunction } from "express";
import { OperationErrorType, OperationalError } from "../response-classes/operational-error-class";
import { ApiResponse } from "../response-classes/api-response-classes";

export const handleGlobalError = (
  error: OperationErrorType | any,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (!(error instanceof OperationalError)) {
    const apiErrorResponse = new ApiResponse.Failure("An unexpected server error occurred");
    return response.status(500).json(apiErrorResponse);
  }
  const apiErrorResponse = new ApiResponse.Failure(error.message, error?.errors);
  return response.status(error.httpStatusCode).json(apiErrorResponse);
};
