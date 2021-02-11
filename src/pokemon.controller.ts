import { Application, Request, Response } from "express";
import { PokemonService } from "./services/pokemon.service";

export class PokemonController {
  constructor(
    private app: Application,
    private pokemonService: PokemonService
  ) {
    this.setRoutes();
  }

  public setRoutes() {
    this.app.route("/").get((_, res: Response) => {
      const welcomeMessage = this.pokemonService.welcomeMessage();
      res.send(welcomeMessage);
    });

    this.app.route("/all-pokemon").get(async (_, res: Response) => {
      try {
        const pokemon = await this.pokemonService.getAllPokemon();
        res.send(pokemon);
      } catch ({ status = 500, message }) {
        res.status(status).send(message);
      }
    });

    this.app.route("/pokemon").post(async (req: Request, res: Response) => {
      const addPokemonResult = await this.pokemonService.addNewPokemon(
        req.body
      );
      res.send(addPokemonResult);
    });

    this.app
      .route("/pokemon/:id")
      .delete(async (req: Request, res: Response) => {
        const deletePokemonResult = await this.pokemonService.deletePokemon(
          req.params.id
        );
        res.send(deletePokemonResult);
      })
      .put(async (req: Request, res: Response) => {
        const updatePokemonResult = await this.pokemonService.updatePokemon(
          req.params.id,
          req.body
        );
        res.send(updatePokemonResult);
      });
  }
}
