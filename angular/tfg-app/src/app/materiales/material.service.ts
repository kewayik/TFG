import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Material } from './material';
import swal from 'sweetalert2';
import { Ejercicio } from '../ejercicios/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private urlEndpoint: string = 'http://localhost:8080/api/materiales';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMateriales(): Observable<Material[]>{ 
    return this.http.get<Material[]>(this.urlEndpoint); 
  }

  create(material: Material): Observable<Material>{ 
    return this.http.post<Material>(this.urlEndpoint, material, {headers: this.httpHeaders}); 
  }

  getMaterial(id): Observable<Material>{ 
    return this.http.get<Material>(`${this.urlEndpoint}/${id}`); 
  }

  update(material: Material): Observable<Material>{
    return this.http.put<Material>(`${this.urlEndpoint}/${material.id}`, material, {headers: this.httpHeaders}); 
  }

  delete(id: number): Observable<Material>{ 
    return this.http.delete<Material>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders}); 
  }

  subirFoto(archivo: File, id): Observable<Material>{ 
    let formData = new FormData();
    formData.append("fotoMaterial",archivo);
    formData.append("id",id);
    return this.http.post(`${this.urlEndpoint}/upload`, formData).pipe(
      map( (response:any)=>response.material as Material), 
      catchError(e=> {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getEjerciciosByMaterialId(materialId: number): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(`${this.urlEndpoint}/${materialId}/ejercicios`);
  }

}
