import * as express from 'express';
import { UserController } from '../controllers/UserController';
import * as bodyParser from 'body-parser';
import { Token } from '../helpers/Token';

export class UserRoutes {
  private router = express.Router();
  private _userController: UserController;

  constructor () {
    this._userController = new UserController();
    this.router.use(bodyParser.urlencoded({ extended: true }));
    this.router.use(bodyParser.json());
  }

  get routes () {
    const { login, create, read } = this._userController;
    const token = new Token();
    this.router.post('/login', login);
    this.router.post('/', create);
    this.router.get('/', token.verify, read);
    return this.router;
  }
}
