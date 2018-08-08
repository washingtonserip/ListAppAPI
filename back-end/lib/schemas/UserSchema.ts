import * as mongoose from 'mongoose';
import { IUserModel } from '../interfaces/userInterface';

const schema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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
