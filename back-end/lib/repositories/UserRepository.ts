import { BaseRepository } from './BaseRepository';
import * as mongoose from 'mongoose';
import { UserSchema } from '../models/UserModel';
import { IUserModel, IUser, IUserRepository } from '../interfaces/UserInterface';

export class UserRepository extends BaseRepository implements IUserRepository {
  public schema: mongoose.Model<IUserModel> = UserSchema;

  public create (payload: IUser) : Promise<IUserModel> {
    return super.create(payload);
  }

  public find (params?: object) : Promise<IUserModel[]> {
    return super.find(params);
  }

  public findById (id: string) : Promise<IUserModel> {
    return super.findById(id);
  }

  public update (id: string, body: IUser) : Promise<IUserModel> {
    return super.update(id, body);
  }

  public delete (id: string) : Promise<IUserModel> {
    return super.delete(id);
  }
}
