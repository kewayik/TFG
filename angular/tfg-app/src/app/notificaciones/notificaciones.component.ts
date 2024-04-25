import { Component } from '@angular/core';
import { NotificacionService } from './notificacion.service';
import { Notificacion } from './notificacion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html'
})
export class NotificacionesComponent {

  constructor(private notificacionService: NotificacionService) { }

  notificaciones: Notificacion[];
  
  ngOnInit(){
    this.notificacionService.getNotificaciones().subscribe(
      notificaciones => this.notificaciones = notificaciones
    );
  }
  eliminarNotificacion(notificacion: Notificacion): void {
    Swal.fire({
        title: "¿Está seguro?",
        text: `¿Seguro que desea eliminar esta notificación?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'No, cancelar!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.value) {
            this.notificacionService.delete(notificacion.id).subscribe(
                response => {
                    this.notificaciones = this.notificaciones.filter(not => not !== notificacion);
                    Swal.fire(
                        'Notificación Eliminada!',
                        `La notificación ha sido eliminada con éxito.`,
                        'success'
                    );
                }
            );
        }
    });
}
}
