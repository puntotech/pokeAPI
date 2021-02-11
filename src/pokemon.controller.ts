import { Application } from "express";
import { PokemonService } from "./services/pokemon.service";

export class Controller {
  private pokemonService: PokemonService;

  constructor(private app: Application) {
    this.pokemonService = new PokemonService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get();
  }
}
