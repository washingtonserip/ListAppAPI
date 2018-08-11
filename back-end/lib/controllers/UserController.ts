import * as express from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { IUser } from '../interfaces/UserInterface';

export class UserController {
  public create (request: express.Request, response: express.Response) {
    const { name, email, username, password } = request.body;
    const payload: IUser = { name, email, username, password };
    const _userRepository = new UserRepository();

    _userRepository.create(payload)
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

}
