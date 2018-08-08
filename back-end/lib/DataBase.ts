import * as mongoose from 'mongoose';

export default class DataBase {
  constructor () {
    mongoose.connect('mongodb://' + process.env.MONGODB_URI);
  }
}
