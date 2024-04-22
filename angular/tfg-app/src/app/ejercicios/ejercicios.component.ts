import { Component } from '@angular/core';
import { Ejercicio } from './ejercicio';
import { EjercicioService } from './ejercicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html'
})
export class EjerciciosComponent {

  ejercicios: Ejercicio[];

  constructor(private ejercicioService: EjercicioService) { }
  
  ngOnInit(){
    this.ejercicioService.getEjercicios().subscribe(
      ejercicios => this.ejercicios = ejercicios
    );
  }

  delete(ejercicio: Ejercicio): void{
    Swal.fire({
      title: "¿Está seguro?",
      text: `¿Seguro que desea eliminar la Ejercicios ${ejercicio.nombre}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.ejercicioService.delete(ejercicio.id).subscribe(
          response => {
            this.ejercicios = this.ejercicios.filter(act => act !== ejercicio)
            Swal.fire(
              'Ejercicio Eliminado!',
              `Ejercicio ${ejercicio.nombre} eliminada con éxito.`,
              'success'
            )
          }
        )
      }
    });
  }
}
