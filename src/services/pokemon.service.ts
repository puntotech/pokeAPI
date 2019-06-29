import { Request, Response } from "express";
import mongoose, { MongooseDocument } from "mongoose";

import { Pokemon } from "../models/pokemon.model";

export class PokeService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send("Welcome to pokeAPI REST");
  }
}
