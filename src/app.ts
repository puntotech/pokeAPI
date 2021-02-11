import { Application } from "express";
import { Controller } from "./pokemon.controller";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
class App {
  public app: Application;
  public pokemonController: Controller;

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
    this.pokemonController = new Controller(this.app);
  }
}

export default new App().app;
