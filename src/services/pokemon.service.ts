import { Request, Response } from "express";
export class PokeService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send("Welcome to pokeAPI REST");
  }
}
