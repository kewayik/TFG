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

  public getGimnasio(): Gimnasio {
    return this.gimnasioSubject.getValue();
  }

  public updateGimnasio(gimnasio: Gimnasio): void {
    this.gimnasioSubject.next(gimnasio);
  }
}