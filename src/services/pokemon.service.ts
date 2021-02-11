import Pokemon from "../models/pokemon.model";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";
import { IPokemon } from "../interfaces/pokemon.interface";
import { HttpError } from "../errors/http.error";

export class PokemonService {
  public welcomeMessage(): string {
    return WELCOME_MESSAGE;
  }

  public getAllPokemon(): Promise<IPokemon[]> {
    return Pokemon.find({}).exec();
  }

  public addNewPokemon(pokemon: IPokemon): Promise<IPokemon> {
    const newPokemon = new Pokemon(pokemon);
    return newPokemon.save();
  }

  public async deletePokemon(id: string) {
    const deletedPokemon: Promise<IPokemon> = await Pokemon.findByIdAndDelete(
      id
    ).exec();

    if (!deletedPokemon) {
      throw new HttpError(`Pokemon with id '${id}' not found`, 404);
    }

    return deletedPokemon;
  }

  public async updatePokemon(
    id: string,
    pokemon: IPokemon | Partial<IPokemon>
  ) {
    const updatedPokemon: Promise<IPokemon> = await Pokemon.findByIdAndUpdate(
      id,
      pokemon
    ).exec();

    if (!updatedPokemon) {
      throw new HttpError(`Pokemon with id '${id}' not found`, 404);
    }

    return updatedPokemon;
  }
}
