import { Request, Response } from "express";

import { GenericError } from "../interfaces/generic-error.interface";

export function handleErrors(err: GenericError, _: Request, res: Response) {
  const { status = 500, message } = err;
  return res.status(status).send(message);
}
