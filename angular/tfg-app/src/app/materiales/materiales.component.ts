import { Component } from '@angular/core';
import { Material } from './material'; 
import { MaterialService } from './material.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materiales', 
  templateUrl: './materiales.component.html'
})
export class MaterialesComponent {

  materiales: Material[]; 

  constructor(private materialService: MaterialService) { } 

  ngOnInit(){
    this.materialService.getMateriales().subscribe( 
      materiales => this.materiales = materiales 
    );
  }

  delete(material: Material): void{ 
    Swal.fire({
      title: "¿Está seguro?",
      text: `¿Seguro que desea eliminar el Material ${material.nombre}?`, 
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
}
