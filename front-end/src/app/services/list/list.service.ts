import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IList } from '../../interfaces/list.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private serverUrl = environment.serverUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll () {
    const urlRequest = `${this.serverUrl}/list`;
    return this.httpClient.get<IList[]>(urlRequest);
  }

  create (theList: IList) {
    const urlRequest = `${this.serverUrl}/list`;
    return this.httpClient.post<IList>(urlRequest, theList);
  }

  read (listId: string) {
    const urlRequest = `${this.serverUrl}/list/${listId}`;
    return this.httpClient.get<IList>(urlRequest);
  }

  update (listId: string, theList: IList) {
    const urlRequest = `${this.serverUrl}/list/${listId}`;
    return this.httpClient.put<IList>(urlRequest, theList);
  }

  delete (listId: string) {
    const urlRequest = `${this.serverUrl}/list/${listId}`;
    return this.httpClient.delete<IList>(urlRequest);
  }
}
