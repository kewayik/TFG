import { Component } from '@angular/core';
import { Material } from './material'; 
import { MaterialService } from './material.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercicio } from '../ejercicios/ejercicio';

@Component({
  selector: 'app-ver-material',
  templateUrl: './ver-material.component.html' 
})
export class VerMaterialComponent {

  public material: Material = new Material(); 
  ejercicios: Ejercicio[];

  constructor(private materialService: MaterialService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.materialService.getMaterial(id).subscribe((material) => {
          this.material = material;
          this.getEjercicios(material.id); 
        });
      }
    })
  }

  getEjercicios(materialId: number): void {
    this.materialService.getEjerciciosByMaterialId(materialId).subscribe(
      ejercicios => this.ejercicios = ejercicios
    );
  }
}
