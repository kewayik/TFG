import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:8080/login';

  private _token: string | undefined;

  private _usuario: any = {
    isAuth: false,
    isAdmin: false,
    usuario: undefined
  };

  constructor(private http: HttpClient) { }

  loginUsuario({ username, password }: any): Observable<any>{
    return this.http.post<any>(this.url, { username, password });
  }
  
  set usuario(usuario: any) {
    this._usuario = usuario;
    sessionStorage.setItem('login', JSON.stringify(usuario));
  }

  get usuario() {
    if (this._usuario.isAuth){
      return this._usuario;
    } else if(sessionStorage.getItem('login') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('login') || '{}');
      return this._usuario;
    }
    return this._usuario;
  }

  set token(token: string) {
    this._token = token;
    sessionStorage.setItem('token', token);
  }

  get token() {
    if (this._token != undefined) {
      return this._token;
    } else if (sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token') || '';
      return this._token;
    }
    return this._token!;
  }

  getPayload(token: string) {
    if (token != null) {
      return JSON.parse(atob(token.split(".")[1]));
    }
    return null;
  }

  hasRole(role: string): boolean {
    return this.usuario.usuario?.rol === role;
  }

  isAdmin() {
    return this.usuario.isAdmin;
  }

  isEntrenador() {
    return this.usuario.usuario?.rol === 'entrenador';
  }

  authenticated() {
    return this.usuario.isAuth;
  }

  logout() {
    this._token = undefined;
    this._usuario = {
      isAuth: false,
      isAdmin: false,
      user: undefined
    };
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('token');
  }

}