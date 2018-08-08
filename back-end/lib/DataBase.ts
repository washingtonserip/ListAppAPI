import * as mongoose from 'mongoose';

export default class DataBase {
  constructor () {
    mongoose.connect('mongodb://test:test123@ds018308.mlab.com:18308/node-test');
  }
}
