import * as express from 'express';

export interface IRequest extends express.Request {
  params: {
    _id: string;
    _user: string;
  };
};
