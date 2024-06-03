import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Usuario } from './usuario';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndpoint: string = 'http://localhost:8080/api/usuarios';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlEndpoint);
  }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndpoint, usuario, {headers: this.httpHeaders});
  }

  getUsuario(id): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndpoint}/${id}`);
  }

  update(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndpoint}/${usuario.id}`, usuario, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }

  getEntrenadoresOAdmins(): Observable<Usuario[]> {
    return this.getUsuarios().pipe(
      map(usuarios => usuarios.filter(usuario => usuario.rol === 'entrenador' || usuario.rol === 'administrador'))
    );
  }

  subirFoto(archivo: File, id): Observable<Usuario>{
    let formData = new FormData();
    formData.append("fotoUsuario",archivo);
    formData.append("id",id);
    return this.http.post(`${this.urlEndpoint}/upload`, formData).pipe(
      map( (response:any)=>response.usuario as Usuario), 
      catchError(e=> {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
