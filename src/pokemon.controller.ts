import { Request, Response, Router } from "express";

import { PokemonService } from "./services/pokemon.service";

export class PokemonController {
  public router = Router();

  constructor(private pokemonService: PokemonService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", this.sayHello);
  }

  private sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.pokemonService.getWelcomeMessage();
    res.send(welcomeMessage);
  };
}
