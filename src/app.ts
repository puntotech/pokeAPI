import { Application } from 'express';
import { Controller } from './main.controller';
import { PokeService } from './services/pokemon.service';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
class App {
  public app: Application;
  public pokeController: Controller;

  constructor() {
    this.app = express();
    this._setConfig();
    this._setMongoConfig();

    this.pokeController = new Controller(this.app, new PokeService());
  }

  private _setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  }

  private _setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/Pokemon', {
      useNewUrlParser: true
    });
  }
}

export default new App().app;
