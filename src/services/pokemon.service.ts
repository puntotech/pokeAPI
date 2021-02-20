import { IPokemon } from "../interfaces/pokemon.interface";
import { Pokemon } from "../models/pokemon.model";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";

export class PokemonService {
  public welcomeMessage(): string {
    return WELCOME_MESSAGE;
  }

  public findAll(): Promise<IPokemon[]> {
    return Pokemon.find({}).exec();
  }

  public add(pokemon: IPokemon): Promise<IPokemon> {
    const newPokemon = new Pokemon(pokemon);
    return newPokemon.save();
  }

  public async delete(id: string) {
    const deletedPokemon: Promise<IPokemon> = await Pokemon.findByIdAndDelete(
      id
    ).exec();

    if (!deletedPokemon) {
      throw new Error(`Pokemon with id '${id}' not found`);
    }

    return deletedPokemon;
  }

  public async update(id: string, pokemon: IPokemon) {
    const updatedPokemon: Promise<IPokemon> = await Pokemon.findByIdAndUpdate(
      id,
      pokemon
    ).exec();

    if (!updatedPokemon) {
      throw new Error(`Pokemon with id '${id}' not found`);
    }

    return updatedPokemon;
  }
}
