import * as mongoose from 'mongoose';
import { Promise } from 'es6-promise';

export class BaseRepository {
  public schema: mongoose.Model<any>;

  public create (payload: any) : any {
    return new Promise((resolve, reject) => {
      this.schema.create(payload, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  public find (params: object = {}) : any {
    return new Promise((resolve, reject) => {
      this.schema.find(params, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  public findById (params: string|object) : any {
    return new Promise((resolve, reject) => {
      this.schema.findById(params, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  public findOne (params: object) : any {
    return new Promise((resolve, reject) => {
      this.schema.findOne(params, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  public update (params: string|object, body: object) : any {
    return new Promise((resolve, reject) => {
      this.schema.findByIdAndUpdate(params, body, { new: true }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  public delete (params: string|object) : any {
    return new Promise((resolve, reject) => {
      this.schema.findByIdAndRemove(params, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
