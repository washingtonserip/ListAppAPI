import * as mongoose from 'mongoose';

export interface ICheckList {
  text: string;
  isCheck: boolean;
  list?: ICheckList[];
}

export interface IList {
  _user: string;
  title: string;
  text: string;
  list?: ICheckList[];
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface IListModel extends IList, mongoose.Document {}

export interface IListRepository {
  create(payload: IList): Promise<IListModel>;
  find(params: object): Promise<IListModel[]>;
  findById(id: string): Promise<IListModel>;
  findOne(params: object): Promise<IListModel>;
  update(params: object, body: IList): Promise<IListModel>;
  delete(params: object): Promise<IListModel>;
}
