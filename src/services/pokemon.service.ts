import { Pokemon } from "../models/pokemon.model";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";

export class PokemonService {
  public getWelcomeMessage(req: Request, res: Response) {
    return WELCOME_MESSAGE;
  }
}
