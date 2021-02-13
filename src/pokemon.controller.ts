import { NextFunction, Request, Response, Router } from "express";

import { PokemonService } from "./services/pokemon.service";

export class PokemonController {
  constructor(public router: Router, private pokemonService: PokemonService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/").get((_, res: Response) => {
      const welcomeMessage = this.pokemonService.welcomeMessage();
      res.send(welcomeMessage);
    });

    this.router
      .route("/all-pokemon")
      .get(async (_, res: Response, next: NextFunction) => {
        try {
          const pokemon = await this.pokemonService.getAllPokemon();
          res.send(pokemon);
        } catch (e) {
          next(e);
        }
      });

    this.router
      .route("/pokemon")
      .post(async (req: Request, res: Response, next: NextFunction) => {
        try {
          const addPokemonResult = await this.pokemonService.addNewPokemon(
            req.body
          );
          res.send(addPokemonResult);
        } catch (e) {
          next(e);
        }
      });

    this.router
      .route("/pokemon/:id")
      .delete(async (req: Request, res: Response, next: NextFunction) => {
        try {
          const deletePokemonResult = await this.pokemonService.deletePokemon(
            req.params.id
          );
          res.send(deletePokemonResult);
        } catch (e) {
          next(e);
        }
      })
      .put(async (req: Request, res: Response, next: NextFunction) => {
        try {
          const updatePokemonResult = await this.pokemonService.updatePokemon(
            req.params.id,
            req.body
          );
          res.send(updatePokemonResult);
        } catch (e) {
          next(e);
        }
      });
  }
}
