import { Component, OnInit } from '@angular/core';
import { Ejercicio } from './ejercicio';
import { EjercicioService } from './ejercicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html'
})
export class EjerciciosComponent implements OnInit {

  ejercicios: Ejercicio[];
  searchTerm: string = '';
  filteredEjercicios: Ejercicio[];

  constructor(private ejercicioService: EjercicioService) { }
  
  ngOnInit(){
    this.ejercicioService.getEjercicios().subscribe(
      ejercicios => {
        this.ejercicios = ejercicios;
        this.filteredEjercicios = this.ejercicios.slice();
      }
    );
  }

  filterEjercicios() {
    this.filteredEjercicios = this.ejercicios.filter(ejercicio =>
      Object.values(ejercicio).some(prop => prop && prop.toString().toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }

  delete(ejercicio: Ejercicio): void{
    let materialesTexto = ejercicio.materiales.map(material => material.nombre).join(', ');
    Swal.fire({
      title: "¿Está seguro?",
      text: ejercicio.materiales.length === 0 ?
        `¿Seguro que desea eliminar la Ejercicio ${ejercicio.nombre}? Este ejercicio no está asociado a ningún material` :
        `¿Seguro que desea eliminar la Ejercicio ${ejercicio.nombre}? Este ejercicio está asociado a los siguientes materiales: ${materialesTexto}`,
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
            this.ejercicios = this.ejercicios.filter(act => act !== ejercicio);
            Swal.fire(
              'Ejercicio Eliminado!',
              `Ejercicio ${ejercicio.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )
      }
    });
  }
}
