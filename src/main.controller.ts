import { PokeService } from "./services/pokemon.service";

export class Controller {
  private pokeService: PokeService;

  constructor(private app: any) {
    this.pokeService = new PokeService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.pokeService.welcomeMessage);
  }
}
