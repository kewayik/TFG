import { Component } from '@angular/core';
import { Actividad } from './actividad';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadService } from './actividad.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-actividad',
  templateUrl: './form-actividad.component.html'
})
export class FormActividadComponent {

  public actividad: Actividad = new Actividad();
  public titulo: string = "Crear Actividad";
  public creandoactividad: boolean = false;

  constructor(private actividadService: ActividadService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cargarActividad();
  }

  cargarActividad(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.actividadService.getActividad(id).subscribe((actividad) => this.actividad = actividad)
      }
    })
  }

  public create(): void{
    this.creandoactividad = true;
    this.actividadService.create(this.actividad).subscribe(
      actividad => {
        this.router.navigate(['/actividades'])
        swal.fire('Nueva Actividad', `La actividad ${actividad.nombre} ha sido creada con éxito`, 'success');
      },
      error => {
        this.creandoactividad = false;
    }
    );
  }

  update(): void{
    this.actividadService.update(this.actividad).subscribe(
      actividad => {
        this.router.navigate(['/actividades'])
        swal.fire('Actividad Actualizada', `La actividad ${actividad.nombre} ha sido editada con éxito`, 'success')
      },
      error => {
        console.error(error);
      }
    );
  }





}
