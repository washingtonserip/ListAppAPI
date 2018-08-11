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
      })
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
      })
    });
  }

  public findById (id: string) : any {
    return new Promise((resolve, reject) => {
      this.schema.findById(id, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
    });
  }

  public update (id: string, body: object) : any {
    return new Promise((resolve, reject) => {
      this.schema.findByIdAndUpdate(id, body, { new: true }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
    });
  }

  public delete (id: string) : any {
    return new Promise((resolve, reject) => {
      this.schema.findByIdAndRemove(id, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
    });
  }
}
