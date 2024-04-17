import { Component } from '@angular/core';
import { Actividad } from './actividad';
import { ActividadService } from './actividad.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html'
})
export class ActividadesComponent {

  activeIndex: number | null = null;

  toggleCollapse(index: number) {
    this.activeIndex = (this.activeIndex === index) ? null : index;
  }
  actividades: Actividad[];

  constructor(private actividadService: ActividadService) { }
  
  ngOnInit(){
    this.actividadService.getActividades().subscribe(
      actividades => this.actividades = actividades
    );
  }

  delete(actividad: Actividad): void{
    Swal.fire({
      title: "¿Está seguro?",
      text: `¿Seguro que desea eliminar la actividad ${actividad.nombre}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.actividadService.delete(actividad.id).subscribe(
          response => {
            this.actividades = this.actividades.filter(act => act !== actividad)
            Swal.fire(
              'Actividad Eliminada!',
              `Actividad ${actividad.nombre} eliminada con éxito.`,
              'success'
            )
          }
        )
      }
    });
  }

}
