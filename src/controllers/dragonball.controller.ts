import { Response, Router } from "express";

import { DragonballService } from "../services/dragonball.service";

export class DragonballController {
  public router = Router();
  constructor(
    private dragonballService: DragonballService,
  ) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/").get((_, res: Response) => {
      const welcomeMessage = this.dragonballService.welcomeMessage();
      res.send(welcomeMessage);
    });

  }
}
