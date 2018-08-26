import * as mongoose from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  name?: string;
  username?: string;
  avatar?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface IUserModel extends IUser, mongoose.Document {}

export interface IUserRepository {
  create(payload: IUser): Promise<IUserModel>;
  find(params?: object): Promise<IUserModel[]>;
  findById(id: string): Promise<IUserModel>;
  findOne(params: object): Promise<IUserModel>;
  update(params: object, body: IUser): Promise<IUserModel>;
  delete(params: object): Promise<IUserModel>;
}
