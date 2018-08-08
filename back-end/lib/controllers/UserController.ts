import * as express from 'express';
import { UserModel } from '../model/UserModel';

export class UserController {
  public create (req: express.Request, res: express.Response) {
    const { name, email, username, password } = req.body;
    const _userModel = new UserModel();

    _userModel.create(name, email, username, password)
      .then((response) => {
        console.log('_userModel - then')
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(200).send(error);
      });
  }
}
