import { Component } from '@angular/core';
import { Material } from './material'; // Importamos la clase Material en lugar de Ejercicio
import { MaterialService } from './material.service'; // Importamos el servicio de materiales en lugar del de ejercicios
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-material', // Cambiamos el nombre del componente
  templateUrl: './ver-material.component.html' // Cambiamos el nombre del archivo HTML
})
export class VerMaterialComponent {

  public material: Material = new Material(); // Cambiamos el tipo de la variable

  constructor(private materialService: MaterialService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.materialService.getMaterial(id).subscribe((material) => this.material = material) // Cambiamos el nombre de la variable
      }
    })
  }
}
