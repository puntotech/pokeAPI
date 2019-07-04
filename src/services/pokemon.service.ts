import { Document, Mongoose, MongooseDocument } from 'mongoose';
import { Request, Response } from 'express';

import { IPokemonService } from '../interfaces/pokemon-service.interface';
import { Pokemon } from '../models/pokemon.model';
import { WELCOME_MESSAGE } from '../constants/pokeApi.constants';

export class PokeService implements IPokemonService {
  public welcomeMessage(req: Request, res: Response) {
    res.status(200).send(WELCOME_MESSAGE);
  }

  public getAllPokemon(req: Request, res: Response) {
    Pokemon.find({}, (error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }

  public addNewPokemon(req: Request, res: Response) {
    const newPokemon = new Pokemon(req.body);
    newPokemon.save((error: Error, pokemon: MongooseDocument) => {
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
      const message = deleted ? 'Deleted successfully' : 'Pokemon not found :(';
      res.status(200).send(message);
    });
  }

  public updatePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    Pokemon.findByIdAndUpdate(
      pokemonId,
      req.body,
      (error: Error, pokemon: any) => {
        if (error) {
          res.send(error);
        }
        const message = pokemon
          ? 'Updated successfully'
          : 'Pokemon not found :(';
        res.send(message);
      }
    );
  }
}
