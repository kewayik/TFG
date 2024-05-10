import { Component, OnInit } from '@angular/core';
import { Material } from './material'; 
import { MaterialService } from './material.service'; 
import Swal from 'sweetalert2';
import { Ejercicio } from '../ejercicios/ejercicio';

@Component({
  selector: 'app-materiales', 
  templateUrl: './materiales.component.html'
})
export class MaterialesComponent implements OnInit {

  materiales: Material[]; 
  ejercicios: Ejercicio[];
  searchTerm: string = '';
  allMateriales: Material[];

  constructor(private materialService: MaterialService) { } 

  ngOnInit(){
    this.materialService.getMateriales().subscribe( 
      materiales => {
        this.materiales = materiales;
        this.allMateriales = materiales;
      }
    );
  }

  delete(material: Material): void{ 
    this.materialService.getEjerciciosByMaterialId(material.id).subscribe(
      ejercicios => {
        this.ejercicios = ejercicios;
        let mensaje: string;

        if (this.ejercicios && this.ejercicios.length > 0) {
          let ejerciciosTexto = this.ejercicios.map(ejercicio => ejercicio.nombre).join(', ');
          mensaje = `Este material está asociado a los siguientes ejercicios: ${ejerciciosTexto}`;
        } else {
          mensaje = 'Este material no está asociado a ningún ejercicio';
        }

        Swal.fire({
          title: "¿Está seguro?",
          text: `¿Seguro que desea eliminar el Material ${material.nombre}? ${mensaje}`, 
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminar!',
          cancelButtonText: 'No, cancelar!',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        }).then((result) => {
          if (result.value) {
            this.materialService.delete(material.id).subscribe( 
              response => {
                this.materiales = this.materiales.filter(act => act !== material)
                Swal.fire(
                  'Material Eliminado!',
                  `Material ${material.nombre} eliminado con éxito.`,
                  'success'
                )
              }
            )
          }
        });
      }
    );
  }

  filterMateriales() {
    if (this.searchTerm === '') {
      this.materiales = this.allMateriales;
    } else {
      this.materiales = this.allMateriales.filter(material =>
        material.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
