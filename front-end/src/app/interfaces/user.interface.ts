export interface IUser {
  email: string;
  password: string;
  name?: string;
  username?: string;
  avatar?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
