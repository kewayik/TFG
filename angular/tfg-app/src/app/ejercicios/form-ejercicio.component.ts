import { Component, Input } from '@angular/core';
import { Ejercicio } from './ejercicio';
import { ActivatedRoute, Router } from '@angular/router';
import { EjercicioService } from './ejercicio.service';
import swal from 'sweetalert2';
import { Material } from '../materiales/material';

@Component({
  selector: 'app-form-ejercicio',
  templateUrl: './form-ejercicio.component.html'
})
export class FormEjercicioComponent {


  public ejercicio: Ejercicio = new Ejercicio();
  public titulo: string = "Crear Ejercicio";
  public creandoEjercicio: boolean = false;
  public materiales: Material[] = [];
  public materialSeleccionado: string; 
  public materialesSeleccionados: Material[] = []; 
  public fotoSeleccionada: File;

  constructor(private ejercicioService: EjercicioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cargarMateriales();
    this.cargarEjercicio();
  }

  cargarEjercicio(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.ejercicioService.getEjercicio(id).subscribe((ejercicio) => {
          this.ejercicio = ejercicio;
          this.materialesSeleccionados = ejercicio.materiales || [];
          this.titulo = 'Actualizar Ejercicio';
        });
      }
    });
  }

  cargarMateriales(): void {
    this.ejercicioService.getMateriales().subscribe(
      materiales => {
        this.materiales = materiales;
      },
      error => {
        console.error(error);
      }
    );
  }

  agregarMaterial(): void {
    const material = this.materiales.find(mat => mat.id.toString() === this.materialSeleccionado);
    if (material && !this.materialesSeleccionados.some(mat => mat.id === material.id)) {
      this.materialesSeleccionados.push(material);
    }
  }

  eliminarMaterial(material: Material): void {
    const index = this.materialesSeleccionados.findIndex(mat => mat.id === material.id);
    if (index !== -1) {
      this.materialesSeleccionados.splice(index, 1);
    }
  }

  guardar(): void {
    this.ejercicio.materiales = this.materialesSeleccionados;
    this.ejercicioService.create(this.ejercicio).subscribe(() => {
      swal.fire('Nuevo Ejercicio', `El ejercicio ${this.ejercicio.nombre} ha sido creado con éxito`, 'success');
      this.router.navigate(['/ejercicios']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al crear el ejercicio', 'error');
    });
  }

  actualizar(): void {
    this.ejercicio.materiales = this.materialesSeleccionados;
    this.ejercicioService.update(this.ejercicio).subscribe(() => {
      swal.fire('Ejercicio Actualizado', `El ejercicio ${this.ejercicio.nombre} ha sido actualizado con éxito`, 'success');
      this.router.navigate(['/ejercicios']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al actualizar el ejercicio', 'error');
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
  this.ejercicioService.subirFoto(this.fotoSeleccionada, this.ejercicio.id)
    .subscribe(ejercicio2=>{
      this.ejercicio = ejercicio2;
      swal.fire('La foto se ha subido completamente!', `La foto se ha subido con éxito: ${this.ejercicio.foto}`, 'success');
    });
 }
}
