import { Component } from '@angular/core';
import { Rutina } from './rutina';
import { RutinaService } from './rutina.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html'
})
export class RutinasComponent {
  constructor(private rutinasService:RutinaService, private authService: AuthService) { }

  rutinas: Rutina[];
  
  ngOnInit(){
    this.rutinasService.getRutinas().subscribe(
      rutinas => this.rutinas = rutinas
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

  delete (rutina: Rutina): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar la rutina ${rutina.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.rutinasService.delete(rutina.id).subscribe(
          response => {
            this.rutinas = this.rutinas.filter(rut => rut !== rutina)
            Swal.fire(
              'Rutina Eliminada!',
              `Rutina ${rutina.nombre} eliminada con éxito.`,
              'success'
            )
          }
        )
      }
    });
  }
}
