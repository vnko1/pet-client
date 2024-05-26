export interface IApiError {
  statusCode: number;
  path: string;
  errorType: string;
  errorMessage: string;
}
