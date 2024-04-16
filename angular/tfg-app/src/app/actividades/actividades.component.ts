import { Component } from '@angular/core';
import { Actividad } from './actividad';
import { ActividadService } from './actividad.service';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html'
})
export class ActividadesComponent {

  actividades: Actividad[];

  constructor(private actividadService: ActividadService) { }
  
  ngOnInit(){
    this.actividadService.getActividades().subscribe(
      actividades => this.actividades = actividades
    );
  }
}
