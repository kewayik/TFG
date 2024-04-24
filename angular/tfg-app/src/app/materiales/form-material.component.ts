import { Component, Input } from '@angular/core';
import { Material } from './material';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from './material.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html'
})
export class FormMaterialComponent {

  public material: Material = new Material();
  public titulo: string = "Crear Material";
  public creandoMaterial: boolean = false;
  public fotoSeleccionada: File;

  constructor(private materialService: MaterialService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cargarMaterial();
  }

  cargarMaterial(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.materialService.getMaterial(id).subscribe((material) => {
          this.material = material;
        });
      }
    });
  }

  guardar(): void {
    this.materialService.create(this.material).subscribe(() => {
      swal.fire('Nuevo Material', `El material ${this.material.nombre} ha sido creado con éxito`, 'success');
      this.router.navigate(['/materiales']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al crear el material', 'error');
    });
  }

  actualizar(): void {
    this.materialService.update(this.material).subscribe(() => {
      swal.fire('Material Actualizado', `El material ${this.material.nombre} ha sido actualizado con éxito`, 'success');
      this.router.navigate(['/materiales']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al actualizar el material', 'error');
    });
  }

  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image')<0){
      swal.fire('Error al seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }

  subirFoto(){
    this.materialService.subirFoto(this.fotoSeleccionada, this.material.id)
      .subscribe(material=>{
        this.material = material;
        swal.fire('La foto se ha subido completamente!', `La foto se ha subido con éxito: ${this.material.foto}`, 'success');
      });
  }
}
