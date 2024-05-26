import { Component, OnInit } from '@angular/core';
import { Ejercicio } from './ejercicio';
import { EjercicioService } from './ejercicio.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html'
})
export class EjerciciosComponent implements OnInit {

  ejercicios: Ejercicio[];
  filteredEjercicios: Ejercicio[];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 8; 
  searching: boolean = false;

  constructor(private ejercicioService: EjercicioService, private authService: AuthService) { }
  
  ngOnInit(){
    this.ejercicioService.getEjercicios().subscribe(
      ejercicios => {
        this.ejercicios = ejercicios;
        this.filteredEjercicios = this.ejercicios.slice(0, this.itemsPerPage);
      }
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

  filterEjercicios() {
    if (this.searching) {
      
      if(this.searchTerm === ''){
        this.currentPage = 1;
        this.searching=false;
        this.filteredEjercicios = this.ejercicios.filter(ejercicio =>
          Object.values(ejercicio).some(prop => prop && prop.toString().toLowerCase().includes(this.searchTerm.toLowerCase()))
        ).slice(0, this.itemsPerPage);

      }else{
      this.searching=true;
      this.currentPage = 1;
      this.filteredEjercicios = this.ejercicios.filter(ejercicio =>
        Object.values(ejercicio).some(prop => prop && prop.toString().toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
    }
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    const startIndex = (pageNumber - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredEjercicios = this.ejercicios.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.ejercicios.length / this.itemsPerPage);
  }
  
  getPageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  delete(ejercicio: Ejercicio): void {
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
            this.filterEjercicios();
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
