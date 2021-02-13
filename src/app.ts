import { Application, Router } from "express";

import { PokemonController } from "./pokemon.controller";
import { PokemonService } from "./services/pokemon.service";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setControllers();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private setControllers() {
    const pokemonController = new PokemonController(
      Router(),
      new PokemonService()
    );
    this.app.use("/pokemon", pokemonController.router);
  }
}

export default new App().app;
