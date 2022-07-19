import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly url = environment.api

  constructor(private http:HttpClient) { }


inicioSesion(usuario:any){
return this.http.post(`${this.url}/auth/signin`, usuario )
}

}
