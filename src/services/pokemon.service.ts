import { Request, Response } from "express";
import { PokemonSchema } from "../models/pokemon.model";
import mongoose from "mongoose";

const Pokemon = mongoose.model("Pokemon", PokemonSchema);
export class PokeService {
  public welcomeMessage(req: Request, res: Response) {
    res.status(200).send("Welcome to pokeAPI REST ^^");
  }

  public getAllPokemon(req: Request, res: Response) {
    Pokemon.find({}, (error: Error, pokemon: any) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }

  public addNewPokemon(req: Request, res: Response) {
    const newPokemon = new Pokemon(req.body);
    newPokemon.save((error: Error, pokemon: any) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }

  public deletePokemon(req: Request, res: Response) {
    const pokemonID = req.params.id;
    Pokemon.findByIdAndDelete(pokemonID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? "Deleted successfully" : "Pokemon not found :(";
      res.status(200).send(message);
    });
  }

  public updatePokemon(req: Request, res: Response) {
    const pokemonID = req.params.id;
    Pokemon.findOneAndUpdate(
      { _id: pokemonID },
      req.body,
      (error: Error, pokemon: any) => {
        if (error) {
          res.send(error);
        }
        res.json(pokemon);
      }
    );
  }
}
