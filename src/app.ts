import express, { Application, Router } from "express";

import { PokemonController } from "./pokemon.controller";
import { PokemonService } from "./services/pokemon.service";
import bodyParser from "body-parser";
import cors from "cors";
import { handleErrors } from "./middleware/error-handler.middleware";
import mongoose from "mongoose";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.setControllers();
    this.setErrorHandlingMiddleware();
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
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (_: any, converted: any) => {
        delete converted._id;
      },
    });
  }

  private setControllers() {
    const pokemonController = new PokemonController(
      Router(),
      new PokemonService()
    );
    this.app.use("/pokemon", pokemonController.router);
  }

  private setErrorHandlingMiddleware() {
    this.app.use(handleErrors);
  }
}

export default new App().app;
