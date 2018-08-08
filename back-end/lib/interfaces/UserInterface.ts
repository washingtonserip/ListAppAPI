import * as mongoose from 'mongoose';

export interface IUser {
  name: string,
  email: string,
  username: string,
  password: string,
  avatar?: string,
  createdAt?: Date,
  modifiedAt?: Date
}

export interface IUserModel extends IUser, mongoose.Document {}
