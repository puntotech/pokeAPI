import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PokemonController } from "./pokemon.controller";
import mongoose from "mongoose";
import { PokemonService } from "./services/pokemon.service";

class App {
  public app: Application;
  public pokeController: PokemonController;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.setControllers();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/Pokemon", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }

  private setControllers() {
    this.pokeController = new PokemonController(this.app, new PokemonService());
  }
}

export default new App().app;
