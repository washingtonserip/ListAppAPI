import * as express from 'express';
import { ListRepository } from '../repositories/ListRepository';
import { IList } from '../interfaces/ListInterface';

export class ListController {
  public create (request: express.Request, response: express.Response) {
    const { userId, title, text, list } = request.body;
    const payload: IList = { userId, title, text, list };
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
    const listId: string = request.params.listId;

    _listRepository.findById(listId)
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public readAll (request: express.Request, response: express.Response) {
    const _listRepository = new ListRepository();

    _listRepository.find()
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public update (request: express.Request, response: express.Response) {
    const { userId, title, text, list } = request.body;
    const payload: IList = { userId, title, text, list };
    const { listId } = request.params;
    const _listRepository = new ListRepository();

    _listRepository.update(listId, payload)
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }

  public Delete (request: express.Request, response: express.Response) {
    const { listId } = request.params;
    const _listRepository = new ListRepository();

    _listRepository.delete(listId)
      .then((result) => {
        response.status(200).send(result);
      })
      .catch((error) => {
        response.status(500).send(error);
      });
  }
}
