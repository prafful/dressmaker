import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http:HttpClient) { }

  addUser(fv){
    return this.http.post("http://localhost:8080/user/add",fv)
  }

}
