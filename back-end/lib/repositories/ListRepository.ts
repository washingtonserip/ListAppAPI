import { BaseRepository } from './BaseRepository';
import * as mongoose from 'mongoose';
import { ListSchema } from '../models/ListModel';
import { IListModel, IList, IListRepository } from '../interfaces/ListInterface';

export class ListRepository extends BaseRepository implements IListRepository {
  public schema: mongoose.Model<IListModel> = ListSchema;

  public create (payload: IList) : Promise<IListModel> {
    return super.create(payload);
  }

  public find (params: object) : Promise<IListModel[]> {
    return super.find(params);
  }

  public findById (params: string|object) : Promise<IListModel> {
    return super.findById(params);
  }

  public update (params: string|object, body: IList) : Promise<IListModel> {
    return super.update(params, body);
  }

  public delete (params: string|object) : Promise<IListModel> {
    return super.delete(params);
  }
}
