import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Ejercicio } from '../ejercicios/ejercicio';
import swal from 'sweetalert2';
import { Diarutina } from './diarutina';

@Injectable({
  providedIn: 'root'
})
export class DiarutinaService {

  private urlEjercicios: string = 'http://localhost:8080/api/ejercicios';
  private urlEndpoint: string = 'http://localhost:8080/api/diasrutinas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  getEjercicios(): Observable<Ejercicio[]>{
    return this.http.get<Ejercicio[]>(this.urlEjercicios);
  }

  getDiasRutinas(): Observable<Diarutina[]>{
    return this.http.get<Diarutina[]>(this.urlEndpoint);
  }

  create(diarutina: Diarutina): Observable<Diarutina>{
    return this.http.post<Diarutina>(this.urlEndpoint, diarutina, {headers: this.httpHeaders});
  }

  getDiaRutina(id): Observable<Diarutina>{
    return this.http.get<Diarutina>(`${this.urlEndpoint}/${id}`);
  }

  update(diarutina: Diarutina): Observable<Diarutina>{
    return this.http.put<Diarutina>(`${this.urlEndpoint}/${diarutina.id}`, diarutina, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Diarutina>{
    return this.http.delete<Diarutina>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }

}
