import { Request, Response } from "express";
import { PokemonSchema } from "../models/pokemon.model";
import mongoose, { MongooseDocument } from "mongoose";

export class PokeService {
  private Pokemon: any;

  constructor() {
    this.Pokemon = mongoose.model("Pokemon", PokemonSchema);
  }

  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send("Welcome to pokeAPI REST");
  }
}
