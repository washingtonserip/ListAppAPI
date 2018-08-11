import * as express from 'express';
import DataBase from './DataBase';
import { UserRoutes } from './routes/UserRoutes';
import { ListRoutes } from './routes/ListRoutes';

class App {
  public app: express.Application;
  public db = new DataBase();

  constructor() {
    this.app = express();

    this.app.use('/user', new UserRoutes().routes);
    this.app.use('/list', new ListRoutes().routes);
  }
}

export default new App().app;
