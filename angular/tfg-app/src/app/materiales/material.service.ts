import { Injectable } from '@angular/core';
import { Material } from './material';
import { Observable, map, of, catchError, throwError, tap } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router'
import { DatePipe, formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private urlEndPoint:string = 'http://localhost:8080/api/materiales';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getMateriales(): Observable<Material[]>{
    return this.http.get<Material[]>(this.urlEndPoint).pipe(
      map(response => response as Material[])
    );
  }


  create(material: Material) : Observable<Material> {
    return this.http.post<Material>(this.urlEndPoint, material, {headers: this.httpHeaders})/*.pipe(
      map((response: any) => response.material as Material),
      catchError( e => {

        if(e.status==400){
          return throwError(e); 
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );*/
  }

  getMaterial(id): Observable<Material>{
    return this.http.get<Material>(`${this.urlEndPoint}/${id}`)/*.pipe(
      catchError(e => {
        this.router.navigate(['/materiales']);
        console.error(e.error.mensaje);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );*/
  }









}
