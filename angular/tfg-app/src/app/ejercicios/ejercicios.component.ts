import { Component, OnInit } from '@angular/core';
import { Ejercicio } from './ejercicio';
import { EjercicioService } from './ejercicio.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios: Ejercicio[] = [];
  filteredEjercicios: Ejercicio[] = [];
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

  get admin() {
    return this.authService.isAdmin();
  }

  get entrenador() {
    return this.authService.isEntrenador();
  }

  get authenticated() {
    return this.authService.authenticated();
  }

  filterEjercicios() {
    if (this.searching) {
      if(this.searchTerm === '') {
        this.currentPage = 1;
        this.searching = false;
        this.filteredEjercicios = this.ejercicios.slice(0, this.itemsPerPage);
      } else {
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
    return this.ejercicios ? Math.ceil(this.ejercicios.length / this.itemsPerPage) : 0;
  }
  
  getPageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  delete(ejercicio: Ejercicio): void {
    if (ejercicio.materiales && ejercicio.materiales.length > 0) {
      let materialesHtml = `<div style="max-height: 200px; overflow-y: auto;">` +
        ejercicio.materiales.map(material => `<p>${material.nombre}</p>`).join('') +
        `</div>`;
      
      Swal.fire({
        title: "¿Está seguro?",
        html: `¿Seguro que desea eliminar el ejercicio ${ejercicio.nombre}?<br>Este ejercicio está asociado a los siguientes materiales: <br><br> ${materialesHtml}`, 
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'No, cancelar!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ejercicioService.delete(ejercicio.id).subscribe(
            response => {
              this.ejercicios = this.ejercicios.filter(act => act !== ejercicio);
              this.filterEjercicios();
              Swal.fire(
                'Ejercicio Eliminado!',
                `Ejercicio ${ejercicio.nombre} eliminado con éxito.`,
                'success'
              );
            }
          );
        }
      });
    } else {
      Swal.fire({
        title: "¿Está seguro?",
        text: `¿Seguro que desea eliminar el ejercicio ${ejercicio.nombre}? Este ejercicio no está asociado a ningún material`, 
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'No, cancelar!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ejercicioService.delete(ejercicio.id).subscribe(
            response => {
              this.ejercicios = this.ejercicios.filter(act => act !== ejercicio);
              this.filterEjercicios();
              Swal.fire(
                'Ejercicio Eliminado!',
                `Ejercicio ${ejercicio.nombre} eliminado con éxito.`,
                'success'
              );
            }
          );
        }
      });
    }
  }
}
