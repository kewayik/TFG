import { Component } from '@angular/core';
import { Ejercicio } from './ejercicio';
import { EjercicioService } from './ejercicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-ejercicio',
  templateUrl: './ver-ejercicio.component.html'
})
export class VerEjercicioComponent {

  public ejercicio: Ejercicio = new Ejercicio();

  constructor(private ejercicioService: EjercicioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ejercicioService.getEjercicio(id).subscribe((ejercicio) => this.ejercicio = ejercicio)
      }
    })
  }
}
