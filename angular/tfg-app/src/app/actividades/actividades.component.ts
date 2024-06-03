import { Component, OnInit } from '@angular/core';
import { Actividad } from './actividad';
import { ActividadService } from './actividad.service';
import { AuthService } from '../auth/auth.service';
import { Usuario } from '../usuarios/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html'
})
export class ActividadesComponent implements OnInit {

  activeIndex: number | null = null;
  orderByDateAsc: boolean = true;
  hideFullActivities: boolean = false;
  usuario: Usuario;
  actividades: Actividad[];

  constructor(private actividadService: ActividadService, private authService: AuthService) { }
  
  ngOnInit() {
    this.actividadService.getActividades().subscribe(
      actividades => this.actividades = actividades
    );
    this.usuario = this.authService.usuario;
  }

  get admin() {
    return this.authService.isAdmin();
  }

  get entrenador() {
    return this.authService.isEntrenador();
  }

  get authenticated() {
    return this.authService.authenticated();
  }

  usuarioHaReservado(actividad: Actividad): boolean {
    return actividad.usuarios.some(user => user.id === this.usuario.id);
  }

  puedeReservar(actividad: Actividad): boolean {
    return actividad.usuarios.length < actividad.aforo && !this.usuarioHaReservado(actividad);
  }

  reservarActividad(actividad: Actividad) {
    if (actividad.usuarios.length >= actividad.aforo) {
      Swal.fire('Error', 'El aforo de la actividad está completo', 'error');
      return;
    }
    if (!this.usuarioHaReservado(actividad)) {
      actividad.usuarios.push(this.usuario);
      this.actividadService.update(actividad).subscribe(
        updatedActividad => {
          this.actividades = this.actividades.map(act => act.id === updatedActividad.id ? updatedActividad : act);
          Swal.fire('Reservado', `Has reservado la actividad ${actividad.nombre}`, 'success');
        }
      );
    }
  }

  cancelarActividad(actividad: Actividad) {
    const index = actividad.usuarios.findIndex(user => user.id === this.usuario.id);
    if (index >= 0) {
      actividad.usuarios.splice(index, 1);
      this.actividadService.update(actividad).subscribe(
        updatedActividad => {
          this.actividades = this.actividades.map(act => act.id === updatedActividad.id ? updatedActividad : act);
          Swal.fire('Cancelado', `Has cancelado la reserva de la actividad ${actividad.nombre}`, 'success');
        }
      );
    }
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

  delete(actividad: Actividad): void {
    Swal.fire({
      title: "¿Está seguro?",
      text: `¿Seguro que desea eliminar la actividad ${actividad.nombre}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6'
    }).then(result => {
      if (result.value) {
        this.actividadService.delete(actividad.id).subscribe(() => {
          this.actividades = this.actividades.filter(act => act !== actividad);
          Swal.fire('Eliminada!', `Actividad ${actividad.nombre} eliminada con éxito.`, 'success');
        });
      }
    });
  }
}
