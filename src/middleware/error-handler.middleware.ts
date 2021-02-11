import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/http.error";

export function handleErrors(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { status = 500, message } = err;
  return res.status(status).send(message);
}
