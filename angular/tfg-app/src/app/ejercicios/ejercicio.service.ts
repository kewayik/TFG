import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Ejercicio } from './ejercicio';
import { Material } from '../materiales/material';
import swal from 'sweetalert2';

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

  subirFoto(archivo: File, id): Observable<Ejercicio>{
    let formData = new FormData();
    formData.append("fotoEjercicio",archivo);
    formData.append("id",id);
    return this.http.post(`${this.urlEndpoint}/upload`, formData).pipe(
      map( (response:any)=>response.ejercicio as Ejercicio),
      catchError(e=> {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

}
