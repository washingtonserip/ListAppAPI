import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl = environment.serverUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  createUser (user: IUser) {
    const urlRequest = `${this.serverUrl}/user`;
    return this.httpClient.post<IUser>(urlRequest, user);
  }
}
