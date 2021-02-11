export class HttpError extends Error {
  constructor(message: string, status: number) {
    super(message);
  }
}
