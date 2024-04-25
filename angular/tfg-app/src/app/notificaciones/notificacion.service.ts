import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Notificacion } from './notificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private urlEndpoint: string = 'http://localhost:8080/api/notificaciones';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getNotificaciones(): Observable<Notificacion[]>{
    return this.http.get<Notificacion[]>(this.urlEndpoint);
  }

  create(notificacion: Notificacion): Observable<Notificacion>{
    return this.http.post<Notificacion>(this.urlEndpoint, notificacion, {headers: this.httpHeaders});
  }

  getNotificacion(id): Observable<Notificacion>{
    return this.http.get<Notificacion>(`${this.urlEndpoint}/${id}`);
  }

  delete(id: number): Observable<Notificacion>{
    return this.http.delete<Notificacion>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }

}
