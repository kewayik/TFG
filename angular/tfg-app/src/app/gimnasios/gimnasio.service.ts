import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gimnasio } from './gimnasio';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {

  private gimnasioSubject: BehaviorSubject<Gimnasio> = new BehaviorSubject<Gimnasio>(null);
  public gimnasio$: Observable<Gimnasio> = this.gimnasioSubject.asObservable();

  constructor() { 
    this.gimnasioSubject = new BehaviorSubject<Gimnasio>(new Gimnasio());
  }

  // Método para obtener el gimnasio actual
  public getGimnasio(): Gimnasio {
    return this.gimnasioSubject.getValue();
  }

  // Método para actualizar el gimnasio
  public updateGimnasio(gimnasio: Gimnasio): void {
    this.gimnasioSubject.next(gimnasio);
  }
}