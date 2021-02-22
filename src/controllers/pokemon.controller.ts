import { NextFunction, Request, Response, Router } from "express";

import { PokemonService } from "../services/pokemon.service";

export class PokemonController {
  public router = Router();
  constructor(private pokemonService: PokemonService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/").get(this.hello);

    this.router.route("/all").get(this.findAll);

    this.router.route("/").post(this.add);

    this.router.route("/:id").delete(this.delete).put(this.update);
  }

  private hello = (_: Request, res: Response) => {
    const welcomeMessage = this.pokemonService.welcomeMessage();
    res.send(welcomeMessage);
  };
  private findAll = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const pokemon = await this.pokemonService.find();
      res.send(pokemon);
    } catch (e) {
      next(e);
    }
  };
  private add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const addPokemonResult = await this.pokemonService.add(req.body);
      res.send(addPokemonResult);
    } catch (e) {
      next(e);
    }
  };
  private delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletePokemonResult = await this.pokemonService.delete(
        req.params.id
      );
      res.send(deletePokemonResult);
    } catch (e) {
      next(e);
    }
  };
  private update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatePokemonResult = await this.pokemonService.update(
        req.params.id,
        req.body
      );
      res.send(updatePokemonResult);
    } catch (e) {
      next(e);
    }
  };
}
