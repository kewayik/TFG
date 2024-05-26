import { Component } from '@angular/core';
import { Actividad } from './actividad';
import { ActividadService } from './actividad.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html'
})
export class ActividadesComponent {

  activeIndex: number | null = null;
  orderByDateAsc: boolean = true;
  hideFullActivities: boolean = false;

  actividades: Actividad[];

  constructor(private actividadService: ActividadService, private authService: AuthService) { }
  
  ngOnInit(){
    this.actividadService.getActividades().subscribe(
      actividades => this.actividades = actividades
    );
  }

  get admin(){
    return this.authService.isAdmin();
 }

 get entrenador(){
    return this.authService.isEntrenador();
 }

 get authenticated(){
      return this.authService.authenticated();
   }

  toggleCollapse(index: number) {
    this.activeIndex = (this.activeIndex === index) ? null : index;
  }

  toggleOrderByDate() {
    this.orderByDateAsc = !this.orderByDateAsc;
    
    this.actividades.sort((a, b) => {
      if (this.orderByDateAsc) {
        return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
      } else {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
      }
    });
  }

  toggleHideFullActivities() {
    if (this.hideFullActivities) {
      this.actividadService.getActividades().subscribe(
        actividades => this.actividades = actividades
      );
    } else {
      this.actividadService.getActividades().subscribe(
        actividades => this.actividades = actividades.filter(actividad => actividad.usuarios.length < actividad.aforo)
      );
    }
    this.hideFullActivities = !this.hideFullActivities;
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
