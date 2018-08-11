import * as express from 'express';
import { ListController } from '../controllers/ListController';
import * as bodyParser from 'body-parser';
import { Token } from '../helpers/Token';

export class ListRoutes {
  private router = express.Router();
  private _userController: ListController;

  constructor () {
    this._userController = new ListController();
    this.router.use(bodyParser.urlencoded({ extended: true }));
    this.router.use(bodyParser.json());
  }

  get routes () {
    const { create, read, readAll, update, Delete } = this._userController;
    const token = new Token();
    this.router.post('/', token.verify, create);
    this.router.get('/:listId', token.verify, read);
    this.router.get('/', token.verify, readAll);
    this.router.put('/:listId', token.verify, update);
    this.router.delete('/:listId', token.verify, Delete);
    return this.router;
  }
}
