import * as mongoose from 'mongoose';
import { UserSchema } from '../schemas/UserSchema';
import { IUserModel } from '../interfaces/UserInterface';
import { Promise } from 'es6-promise';

export class UserModel {
  private userSchema: mongoose.Model<IUserModel> = UserSchema;

  public create (name: string, email: string, username: string, password: string) {
    const user = <IUserModel>{
      name,
      email,
      username,
      password
    };

    return new Promise((resolve, reject) => {
      this.userSchema.create(user, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      })
    });
  }

  public find () {
    return new Promise((resolve, reject) => {
      this.userSchema.find({}, (error, users) => {
        if (error) {
          reject(error);
        } else {
          resolve(users);
        }
      })
    });
  }

  public findById (id) {
    return new Promise((resolve, reject) => {
      this.userSchema.findById(id, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      })
    });
  }

  public update (id, body) {
    return new Promise((resolve, reject) => {
      this.userSchema.findByIdAndUpdate(id, body, { new: true }, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      })
    });
  }

  public delete (id) {
    return new Promise((resolve, reject) => {
      this.userSchema.findByIdAndRemove(id, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      })
    });
  }
}
