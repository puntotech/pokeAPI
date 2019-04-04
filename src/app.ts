import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Controller } from "./main.controller";
class App {
  public app: any;
  public pokeController: Controller;

  constructor() {
    this.app = express();
    this._setConfig();

    this.pokeController = new Controller(this.app);
  }

  private _setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }
}

export default new App().app;
