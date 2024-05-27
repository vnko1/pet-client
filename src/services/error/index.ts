import { IApiError } from "@/types";

export class CustomError extends Error implements IApiError {
  constructor(
    public statusCode: number,
    public path: string,
    public errorType: string,
    public errorMessage: string
  ) {
    super(errorMessage);
  }
}
