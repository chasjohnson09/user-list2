import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // added the next three
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:54653/api/users";   //created a base url that can be concatenated 

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]> {    // observable here 
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;  // and here must be the exact same
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>; // post takes two parameters!!
  }
  change(user: User): Observable<any> {
    return this.http.put(`${this.baseurl}/${user.id}`, user) as Observable<any>;
  }
  remove(user: User): Observable<User> {
    return this.http.delete(`${this.baseurl}/${user.id}`) as Observable<User>;
  }
  
}
