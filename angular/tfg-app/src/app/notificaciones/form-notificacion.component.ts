import { Component } from '@angular/core';
import { Notificacion } from './notificacion';
import { NotificacionService } from './notificacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-notificacion',
  templateUrl: './form-notificacion.component.html'
})
export class FormNotificacionComponent {
  public notificacion: Notificacion = new Notificacion();
  public titulo: string = "Crear Notificacion";

  constructor(private notificacionService: NotificacionService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cargarNotificacion();
    this.notificacion.fecha = this.obtenerFechaActual();
    this.notificacion.horaGeneracion = this.obtenerHoraActual(); 
  }

  cargarNotificacion(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.notificacionService.getNotificacion(id).subscribe((notificacion) => {
          this.notificacion = notificacion;
        });
      }
    });
  }

  guardar(): void {
    this.notificacionService.create(this.notificacion).subscribe(() => {
      swal.fire('Nueva notificacion', `La notificacion ha sido creado con éxito`, 'success');
      this.router.navigate(['/notificaciones']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al crear la notificacion', 'error');
    });
  }
  obtenerFechaActual(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  obtenerHoraActual(): string {
    const today = new Date();
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  }
}
