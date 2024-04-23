import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Ejercicio } from './ejercicio';
import { Material } from '../materiales/material';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  private urlEndpoint: string = 'http://localhost:8080/api/ejercicios';
  private urlMateriales: string = 'http://localhost:8080/api/materiales';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getEjercicios(): Observable<Ejercicio[]>{
    return this.http.get<Ejercicio[]>(this.urlEndpoint);
  }

  getMateriales(): Observable<Material[]>{
    return this.http.get<Material[]>(this.urlMateriales);
  }

  create(ejercicio: Ejercicio): Observable<Ejercicio>{
    return this.http.post<Ejercicio>(this.urlEndpoint, ejercicio, {headers: this.httpHeaders});
  }

  getEjercicio(id): Observable<Ejercicio>{
    return this.http.get<Ejercicio>(`${this.urlEndpoint}/${id}`);
  }

  update(ejercicio: Ejercicio): Observable<Ejercicio>{
    return this.http.put<Ejercicio>(`${this.urlEndpoint}/${ejercicio.id}`, ejercicio, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Ejercicio>{
    return this.http.delete<Ejercicio>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }

}
