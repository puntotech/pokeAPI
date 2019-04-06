import { PokeService } from "./services/pokemon.service";

export class Controller {
  private pokeService: PokeService;

  constructor(private app: any) {
    this.pokeService = new PokeService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.pokeService.welcomeMessage);

    this.app.route("/pokemons").get(this.pokeService.getAllPokemon);

    this.app.route("/pokemon").post(this.pokeService.addNewPokemon);

    this.app
      .route("/pokemon/:id")
      .delete(this.pokeService.deletePokemon)
      .put(this.pokeService.updatePokemon);
  }
}
