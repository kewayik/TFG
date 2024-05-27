import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from './registro';
import { Ejercicio } from '../ejercicios/ejercicio';
import { Usuario } from '../usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private urlEndpoint: string = 'http://localhost:8080/api/registros';
  private urlEjercicios: string = 'http://localhost:8080/api/ejercicios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  ejercicio: Ejercicio = new Ejercicio();
  usuario: Usuario = new Usuario();

  constructor(private http: HttpClient) { }

  getRegistros(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.urlEndpoint);
  }

  getEjercicios(): Observable<Ejercicio[]>{
    return this.http.get<Ejercicio[]>(this.urlEndpoint);
  }

  create(registro: Registro): Observable<Registro>{

    this.usuario.id = registro.usuario;
    
    this.ejercicio.id = registro.ejercicio;

    const _registro = {
      fecha: registro.fecha,
      peso: registro.peso,
      repeticiones: registro.repeticiones,
      series: registro.series,
      ejercicio: this.ejercicio,
      usuario: this.usuario
    }


    return this.http.post<Registro>(this.urlEndpoint, _registro, {headers: this.httpHeaders});
  }

  getRegistro(id): Observable<Registro>{
    return this.http.get<Registro>(`${this.urlEndpoint}/${id}`);
  }

  delete(id: number): Observable<Registro>{
    return this.http.delete<Registro>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }

}
