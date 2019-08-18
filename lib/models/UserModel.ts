import * as mongoose from 'mongoose';
import { IUserModel } from '../interfaces/UserInterface';

const schema: mongoose.Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    required: false
  },
  modifiedAt: {
    type: Date,
    required: false
  }
});

mongoose.model('User', schema);
export const UserSchema = mongoose.model<IUserModel>('User');
