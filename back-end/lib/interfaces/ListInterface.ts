import * as mongoose from 'mongoose';

export interface ICheckList {
  text: string;
  isCheck: boolean;
  list?: ICheckList[];
}

export interface IList {
  userId: string;
  title: string;
  text: string;
  list?: ICheckList[];
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface IListModel extends IList, mongoose.Document {}

export interface IListRepository {
  create(payload: IList): Promise<IListModel>;
  find(params?: object): Promise<IListModel[]>;
  findById(id: string): Promise<IListModel>;
  update(id: string, body: IList): Promise<IListModel>;
  delete(id: string): Promise<IListModel>;
}
