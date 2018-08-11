import { BaseRepository } from './BaseRepository';
import * as mongoose from 'mongoose';
import { ListSchema } from '../models/ListModel';
import { IListModel, IList, IListRepository } from '../interfaces/ListInterface';

export class ListRepository extends BaseRepository implements IListRepository {
  public schema: mongoose.Model<IListModel> = ListSchema;

  public create (payload: IList) : Promise<IListModel> {
    return super.create(payload);
  }

  public find (params?: object) : Promise<IListModel[]> {
    return super.find(params);
  }

  public findById (id: string) : Promise<IListModel> {
    return super.findById(id);
  }

  public update (id: string, body: IList) : Promise<IListModel> {
    return super.update(id, body);
  }

  public delete (id: string) : Promise<IListModel> {
    return super.delete(id);
  }
}
