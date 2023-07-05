import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, map, of, catchError, throwError, tap } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router'
import { DatePipe, formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getClientes(page: number): Observable<any>{
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response:any)=> {
        console.log('ClienteService: tap 1');
        (response.content as Cliente[]).forEach( cliente => {
          console.log(cliente.nombre);
        }

        )
      }),
      map((response:any) => {
        let clientes = 
        (response.content as Cliente[]).map(cliente => {
          
          //let datePipe = new DatePipe('es');
          //cliente.createAt = datePipe.transform(cliente.createAt, 'EEEE dd, MMMM yyyy')
          return cliente;
        });
        return response;
      }),
      tap(response=> {
        console.log('ClienteService: tap 2');
        (response.content as Cliente[]).forEach( cliente => {
          console.log(cliente.nombre);
        }

        )
      })
    );
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError( e => {

        if(e.status==400){
          return throwError(e); 
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(cliente: Cliente): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers:this.httpHeaders}).pipe(
      catchError(e=> {
        if(e.status==400){
          return throwError(e); 
        }
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e=> {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

}
