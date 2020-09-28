import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../../endpoints'
import { ResponseModel } from '../../view-models/response.model';
import { UserModel } from '../../view-models/user.model';
import { map, catchError } from 'rxjs/operators';

const apiToken = '6cd3746f85b17108552a2db3fd5fb3728b6d28ede77b71f9f332250b953f6ca0';
const header = {
  headers: new HttpHeaders().set('Authorization', `Bearer ${apiToken}`)
}

//Api access token.

@Injectable()
export class DataApiService {

  constructor(private http: HttpClient) { }
  public getAllUSersService = (): Observable<UserModel[]> => {
    return this.http.get<ResponseModel<UserModel[]>>(Endpoints.userService).pipe(map(response => {
      return response.data;
    }));
  }
  public getUserService = (id: number): Observable<UserModel> => {
    return this.http.get<ResponseModel<UserModel>>(`${Endpoints.userService}/${id}`).pipe(map(response => {
      return response.data;
    }));
  }
  public postService = (payload: UserModel): Observable<UserModel> => {
    return this.http.post<ResponseModel<UserModel>>(Endpoints.userService, payload).pipe(map(response => {
      return response.data;
    }));
  }
  public updateUserService = (payload: UserModel): Observable<UserModel> => {
    return this.http.put<ResponseModel<UserModel>>(`${Endpoints.userService}/${payload.id}`, payload, header).pipe(map(response => {
      return response.data;
    }));
  }
  public deleteUserService = (userId: number): Observable<UserModel> => {
    return this.http.delete<ResponseModel<UserModel>>(`${Endpoints.userService}/${userId}`, header).pipe(map(response => {
      return response.data;
    }));
  }
}
