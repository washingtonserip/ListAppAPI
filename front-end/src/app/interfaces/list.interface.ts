export interface ICheckList {
  text: string;
  isCheck: boolean;
  list?: ICheckList[];
}

export interface IList {
  _id: string;
  _user: string;
  title: string;
  text: string;
  list?: ICheckList[];
  createdAt?: Date;
  modifiedAt?: Date;
}
