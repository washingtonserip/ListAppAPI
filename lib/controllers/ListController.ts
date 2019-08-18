import * as express from 'express';
import { ListRepository } from '../repositories/ListRepository';
import { IList } from '../interfaces/ListInterface';

export class ListController {
  public create (request: express.Request, response: express.Response) {
    const { title, text, list } = request.body;
    const { _user } = request.params;
    const payload: IList = { _user, title, text, list };
    const _listRepository = new ListRepository();

    _listRepository.create(payload)
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public read (request: express.Request, response: express.Response) {
    const _listRepository = new ListRepository();
    const { _id, _user } = request.params;

    _listRepository.findOne({ _id, _user })
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public readAll (request: express.Request, response: express.Response) {
    const _listRepository = new ListRepository();
    const { _user } = request.params;

    _listRepository.find({ _user })
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public update (request: express.Request, response: express.Response) {
    const { title, text, list } = request.body;
    const { _id, _user } = request.params;
    const payload: IList = { _user, title, text, list };
    const _listRepository = new ListRepository();

    _listRepository.update({ _id, _user }, payload)
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public Delete (request: express.Request, response: express.Response) {
    const { _id, _user } = request.params;
    const _listRepository = new ListRepository();

    _listRepository.delete({ _id, _user })
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }
}
