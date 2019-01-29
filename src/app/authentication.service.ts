import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  authenticateUser(user : user){
    return this.http.post("http://localhost:8080/userauth",user);
  }
}
