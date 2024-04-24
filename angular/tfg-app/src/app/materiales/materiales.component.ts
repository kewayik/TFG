import { Component } from '@angular/core';
import { Material } from './material'; // Importamos la clase Material en lugar de Ejercicio
import { MaterialService } from './material.service'; // Importamos el servicio de materiales en lugar del de ejercicios
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materiales', // Cambiamos el nombre del componente
  templateUrl: './materiales.component.html' // Cambiamos el nombre del archivo HTML
})
export class MaterialesComponent { // Cambiamos el nombre de la clase

  materiales: Material[]; // Cambiamos el tipo de la variable

  constructor(private materialService: MaterialService) { } // Cambiamos el nombre del servicio

  ngOnInit(){
    this.materialService.getMateriales().subscribe( // Cambiamos el nombre del servicio
      materiales => this.materiales = materiales // Cambiamos el nombre de la variable
    );
  }

  delete(material: Material): void{ // Cambiamos el tipo de parámetro
    Swal.fire({
      title: "¿Está seguro?",
      text: `¿Seguro que desea eliminar el Material ${material.nombre}?`, // Cambiamos el nombre de la variable
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.materialService.delete(material.id).subscribe( // Cambiamos el nombre del servicio y el nombre de la variable
          response => {
            this.materiales = this.materiales.filter(act => act !== material) // Cambiamos el nombre de la variable
            Swal.fire(
              'Material Eliminado!', // Cambiamos el mensaje
              `Material ${material.nombre} eliminado con éxito.`, // Cambiamos el nombre de la variable
              'success'
            )
          }
        )
      }
    });
  }
}
