import * as mongoose from 'mongoose';
import { IListModel } from '../interfaces/ListInterface';

const CheckListSchema = new mongoose.Schema({
  text: String,
  isCheck: Boolean
});
CheckListSchema.add({ list: [CheckListSchema] });

const schema: mongoose.Schema = new mongoose.Schema({
  _user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false
  },
  list: {
    type: [CheckListSchema],
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

mongoose.model('List', schema);
export const ListSchema = mongoose.model<IListModel>('List');
