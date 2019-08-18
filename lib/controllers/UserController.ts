import * as express from 'express';
import * as bcryptjs from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import Config from '../Config';
import { UserRepository } from '../repositories/UserRepository';
import { IUser } from '../interfaces/UserInterface';

export class UserController {
  public login (request: express.Request, response: express.Response) {
    const _userRepository = new UserRepository();
    const { email, password } = request.body;

    _userRepository.findOne({ email })
      .then((result) => {
        if (!result) {
          return response.status(404).send('No user found.');
        }

        const passwordIsValid = password ? bcryptjs.compareSync(password, result.password) : false;
        if (!passwordIsValid) {
          return response.status(401).send({ auth: false, token: null });
        }

        const token = jwt.sign({ id: result._id }, Config.secretKey, {
          expiresIn: 86400
        });

        response.status(200).send({ auth: true, token });
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public create (request: express.Request, response: express.Response) {
    const { name, email, username, password } = request.body;
    const hashedPassword = bcryptjs.hashSync(password, 8);
    const payload: IUser = { name, email, username, password: hashedPassword };
    const _userRepository = new UserRepository();

    _userRepository.create(payload)
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public read (request: express.Request, response: express.Response) {
    const _userRepository = new UserRepository();
    const _user: string = request.params._user;

    _userRepository.findById(_user)
      .then((result) => {
        const { _id, name, username } = result;
        response.status(200).send({ _id, name, username });
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }
}
