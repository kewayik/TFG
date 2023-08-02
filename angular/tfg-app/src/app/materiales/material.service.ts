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

  getMateriales(page: number): Observable<any>{
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response:any)=> {
        console.log('materialService: tap 1');
        (response.content as Material[]).forEach( material => {
          console.log(material.nombre);
        }

        )
      }),
      map((response:any) => {
        let materials = 
        (response.content as Material[]).map(material => {
          
          return material;
        });
        return response;
      }),
      tap(response=> {
        console.log('materialService: tap 2');
        (response.content as Material[]).forEach( material => {
          console.log(material.nombre);
        }

        )
      })
    );
  }
  
  /*  return this.http.get(this.urlEndPoint).pipe(
      map((response:any)=> {
        (response.content as Material[]).map(material => {
          return material;
        });
        return response; 
      }))*/
  



  create(material: Material) : Observable<Material> {
    return this.http.post<Material>(this.urlEndPoint, material, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.material as Material),
      catchError( e => {

        if(e.status==400){
          return throwError(e); 
        }

        console.error(e.error.mensaje);
        swal.fire("Error al crear material", e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getMaterial(id): Observable<Material>{
    return this.http.get<Material>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/materiales']);
        console.error(e.error.mensaje);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(material: Material): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${material.id}`, material, {headers:this.httpHeaders}).pipe(
      catchError(e=> {
        if(e.status==400){
          return throwError(e); 
        }
        console.error(e.error.mensaje);
        swal.fire("Error al editar material", e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<Material>{
    return this.http.delete<Material>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e=> {
        console.error(e.error.mensaje);
        swal.fire("Error al eliminar material", e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }





}
