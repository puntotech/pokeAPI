import { Response, Router } from "express";

import { PokemonService } from "./services/pokemon.service";

export class PokemonController {
  constructor(public router: Router, private pokemonService: PokemonService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", (_, res: Response) => {
      const message = this.pokemonService.getWelcomeMessage();
      return res.status(200).send(message);
    });
  }
}
