import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})//same as AddSingleton<>() in MVC
export class SvcLoginService {

  constructor(private http:HttpClient) { }

  public login(email:string,password:string)
  {
    let url="https://reqres.in/api/login";
    let body=
    {
      
        "email": email,
        "password": password
    }
    return this.http.post(url,body)
  }
}
