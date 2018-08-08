import * as express from 'express';
import DataBase from './DataBase';
import { UserRoutes } from './routes/UserRoutes';

class App {
  public app: express.Application;
  public db = new DataBase();

  constructor() {
    this.app = express();
  }
}

export default new App().app;
