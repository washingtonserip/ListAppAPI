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

  public findOne (params: object) : Promise<IUserModel> {
    return super.findOne(params);
  }

  public update (params: object, body: IUser) : Promise<IUserModel> {
    return super.update(params, body);
  }

  public delete (params: object) : Promise<IUserModel> {
    return super.delete(params);
  }
}
