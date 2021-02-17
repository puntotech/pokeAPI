import { Request, Response, Router } from "express";

import { PokemonService } from "./services/pokemon.service";

export class PokemonController {
  public router = Router();
  private pokemonService: PokemonService;

  constructor() {
    this.pokemonService = new PokemonService();
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/").get(this.sayHello);
  }

  private sayHello(_: Request, res: Response) {
    const welcomeMessage = this.pokemonService.getWelcomeMessage;
    res.send(welcomeMessage);
  }
}
