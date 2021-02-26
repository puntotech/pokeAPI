import { GenericError } from "../interfaces/generic-error.interface";

export class HttpError extends Error implements GenericError {
  constructor(message: string, public status: number) {
    super(message);
  }
}
