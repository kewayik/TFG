import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Material } from './material'; // Importamos la clase Material en lugar de Ejercicio
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private urlEndpoint: string = 'http://localhost:8080/api/materiales'; // Cambiamos la URL para trabajar con materiales

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMateriales(): Observable<Material[]>{ // Cambiamos el nombre de la función y el tipo de retorno
    return this.http.get<Material[]>(this.urlEndpoint); // Cambiamos la URL para obtener materiales
  }

  create(material: Material): Observable<Material>{ // Cambiamos el nombre de la función y el tipo de parámetro
    return this.http.post<Material>(this.urlEndpoint, material, {headers: this.httpHeaders}); // Cambiamos la URL para crear materiales
  }

  getMaterial(id): Observable<Material>{ // Cambiamos el nombre de la función y el tipo de retorno
    return this.http.get<Material>(`${this.urlEndpoint}/${id}`); // Cambiamos la URL para obtener materiales
  }

  update(material: Material): Observable<Material>{ // Cambiamos el nombre de la función y el tipo de parámetro
    return this.http.put<Material>(`${this.urlEndpoint}/${material.id}`, material, {headers: this.httpHeaders}); // Cambiamos la URL para actualizar materiales
  }

  delete(id: number): Observable<Material>{ // Cambiamos el nombre de la función y el tipo de retorno
    return this.http.delete<Material>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders}); // Cambiamos la URL para eliminar materiales
  }

  subirFoto(archivo: File, id): Observable<Material>{ // Cambiamos el nombre de la función y el tipo de retorno
    let formData = new FormData();
    formData.append("fotoMaterial",archivo);
    formData.append("id",id);
    return this.http.post(`${this.urlEndpoint}/upload`, formData).pipe(
      map( (response:any)=>response.material as Material), // Cambiamos el tipo de retorno
      catchError(e=> {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

}
