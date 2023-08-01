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
    return this.http.get<Material[]>(this.urlEndPoint);
  }














}
