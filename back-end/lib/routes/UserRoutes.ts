import * as express from 'express';
import { UserController } from '../controllers/UserController';
import * as bodyParser from 'body-parser';

export class UserRoutes {
  private router = express.Router();
  private _userController: UserController;

  constructor () {
    this._userController = new UserController();
    this.router.use(bodyParser.urlencoded({ extended: true }));
    this.router.use(bodyParser.json())
  }

  get routes () {
    const { create } = this._userController;
    this.router.post('/user', create);
    return this.router;
  }
}
