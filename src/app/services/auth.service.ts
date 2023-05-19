import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:7058/api/"


  registeruser(user: string[]) {
    return this.http.post(
      this.baseurl + "user/CreateUser",
      {
        email: user[0],
        username: user[1],
        pwd: user[2],
        rpwd: user[3]
      },
      {
        responseType: 'text',
      }
    );
  }

  loginuser(logininfo: string[])
  {
    return this.http.post(
    this.baseurl + "user/LoginUser",
    {
      username: logininfo[0],
      pwd: logininfo[0],
    },
    {
      responseType: 'text',
    }
  )}



}
