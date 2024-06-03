import { Component, OnInit } from '@angular/core';
import { Material } from './material';
import { MaterialService } from './material.service';
import Swal from 'sweetalert2';
import { Ejercicio } from '../ejercicios/ejercicio';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  materiales: Material[] = [];
  allMateriales: Material[] = [];
  ejercicios: Ejercicio[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  searching: boolean = false;

  constructor(private materialService: MaterialService, private authService: AuthService) { }

  ngOnInit(){
    this.materialService.getMateriales().subscribe(
      materiales => {
        this.allMateriales = materiales;
        this.filterMateriales();
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

  filterMateriales() {
    if(this.searching){
      if(this.searchTerm === ''){
        this.currentPage = 1;
        this.searching=false;
        this.materiales = this.allMateriales.slice(0, this.itemsPerPage);
      }else{
        this.searching=true;
        this.currentPage = 1;
        this.materiales = this.allMateriales.filter(material =>
          Object.values(material).some(prop => prop && prop.toString().toLowerCase().includes(this.searchTerm.toLowerCase()))
        );
      }
    } else {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.materiales = this.allMateriales.slice(startIndex, endIndex);
    }
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.filterMateriales();
  }

  getTotalPages(): number {
    return Math.ceil(this.allMateriales.length / this.itemsPerPage);
  }
  
  getPageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }


  delete(material: Material): void { 
    this.materialService.getEjerciciosByMaterialId(material.id).subscribe(
      ejercicios => {
        this.ejercicios = ejercicios;
        let mensaje: string;
  
        if (this.ejercicios && this.ejercicios.length > 0) {
          let ejerciciosHtml = `<div style="max-height: 200px; overflow-y: auto;">` +
            this.ejercicios.map(ejercicio => `<p>${ejercicio.nombre}</p>`).join('') +
            `</div>`;
          
          mensaje = `Este material está asociado a los siguientes ejercicios: <br><br> ${ejerciciosHtml}`;
        } else {
          mensaje = 'Este material no está asociado a ningún ejercicio';
        }
  
        Swal.fire({
          title: "¿Está seguro?",
          html: `¿Seguro que desea eliminar el Material ${material.nombre}? <br><br>${mensaje}`, 
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminar!',
          cancelButtonText: 'No, cancelar!',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        }).then((result) => {
          if (result.isConfirmed) {
            this.materialService.delete(material.id).subscribe(
              response => {
                this.materiales = this.materiales.filter(act => act !== material);
                Swal.fire(
                  'Material Eliminado!',
                  `Material ${material.nombre} eliminado con éxito.`,
                  'success'
                );
              }
            );
          }
        });
      }
    );
  }
  
  
  

  
}
