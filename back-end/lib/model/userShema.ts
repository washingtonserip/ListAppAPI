import * as mongoose from 'mongoose';
import { IUser } from 'interfaces/userInterface'

export interface IUserModel extends IUser, mongoose.Document {}

const schema = new mongoose.Schema({
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
}).pre('save', function(next) {
  if (this._doc) {
    const doc = <IUserModel>this._doc;
    const now = new Date();
    if (!doc.createdAt) {
      doc.createdAt = now;
    }
    doc.modifiedAt = now;
  }
  next();
  return this;
});

export const UserSchema = mongoose.model<IUserModel>('user', schema, 'users', true);
