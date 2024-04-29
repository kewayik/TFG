import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import swal from 'sweetalert2';
import { Rutina } from './rutina';
import { Diarutina } from '../diasrutinas/diarutina';
import { Usuario } from '../usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  private urlEndpoint: string = 'http://localhost:8080/api/rutinasPred';
  private urlDiasRutina: string = 'http://localhost:8080/api/diasrutinas';
  private urlUsuarios: string = 'http://localhost:8080/api/usuarios';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  getRutinas(): Observable<Rutina[]>{
    return this.http.get<Rutina[]>(this.urlEndpoint);
  }

  getDiasRutina(): Observable<Diarutina[]>{
    return this.http.get<Diarutina[]>(this.urlDiasRutina);
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlUsuarios);
  }

  create(rutina: Rutina): Observable<Rutina>{
    return this.http.post<Rutina>(this.urlEndpoint, rutina, {headers: this.httpHeaders});
  }

  getRutina(id): Observable<Rutina>{
    return this.http.get<Rutina>(`${this.urlEndpoint}/${id}`);
  }

  update(rutina: Rutina): Observable<Rutina>{
    return this.http.put<Rutina>(`${this.urlEndpoint}/${rutina.id}`, rutina, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Rutina>{
    return this.http.delete<Rutina>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }
}
