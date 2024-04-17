import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Actividad } from './actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private urlEndpoint: string = 'http://localhost:8080/api/actividades';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getActividades(): Observable<Actividad[]>{
    return this.http.get<Actividad[]>(this.urlEndpoint);
  }

  create(actividad: Actividad): Observable<Actividad>{
    return this.http.post<Actividad>(this.urlEndpoint, actividad, {headers: this.httpHeaders});
  }

  getActividad(id): Observable<Actividad>{
    return this.http.get<Actividad>(`${this.urlEndpoint}/${id}`);
  }

  update(actividad: Actividad): Observable<Actividad>{
    return this.http.put<Actividad>(`${this.urlEndpoint}/${actividad.id}`, actividad, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Actividad>{
    return this.http.delete<Actividad>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }

}
