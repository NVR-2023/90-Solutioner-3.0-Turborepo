export type ApiResponseDataType = Record<string, unknown>[];
export type ApiResponseErrorType = string[];

export class ApiResponse {
  ok: boolean;
  message: string;
  timestamp: Date;

  private constructor(ok: boolean, message: string) {
    this.ok = ok;
    this.message = message;
    this.timestamp = new Date();
  }

  static SUccess = class extends ApiResponse {
    data?: Record<string, unknown>[];

    constructor(message: string, data: ApiResponseDataType) {
      super(true, message);
      this.data = data;
    }
  };

  static Failure = class extends ApiResponse {
    errors?: string[];

    constructor(message: string, errors: ApiResponseErrorType) {
      super(false, message);
      this.errors = errors;
    }
  };
}
