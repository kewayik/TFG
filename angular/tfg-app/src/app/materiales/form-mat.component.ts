import { Component } from '@angular/core';
import {Material} from './material'
import {ActivatedRoute, Router} from '@angular/router'
import { MaterialService } from './material.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-mat',
  templateUrl: './form-mat.component.html'
})
export class FormMatComponent {

  public material: Material = new Material()
  public titulo: string = "Crear Material"
  public creandoMaterial: boolean

  public errores: string[];

  constructor(private materialService: MaterialService, 
  private router: Router,
  private activatedRoute: ActivatedRoute){}

  ngOnInit(){
      this.cargarMaterial()
  }

  cargarMaterial(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.materialService.getMaterial(id).subscribe((material)=>this.material = material)
      }
    })
  }

  create(): void{   
    this.creandoMaterial = true;

    this.materialService.create(this.material).subscribe(
      material => { 
      this.router.navigate(['/materiales'])
      swal.fire('Nuevo material', `El material ${material.nombre} ha sido creado con éxito`,'success')
      this.creandoMaterial = false;
    },
    err => {
      this.errores = err.error.errors as string[];
      console.error('Código del error desde el backend: '+ err.status);
      console.error(err.error.errors);
      this.creandoMaterial = false;
    }
    );
  }

  update():void{
    this.materialService.update(this.material)
    .subscribe( json => {
      this.router.navigate(['/materiales'])
      swal.fire('Material Actualizado', `${json.mensaje}: ${json.material.nombre}`, 'success')
    },
    err => {
      this.errores = err.error.errors as string[];
      console.error('Código del error desde el backend: '+ err.status);
      console.error(err.error.errors);
    })
  }


}
