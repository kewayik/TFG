import { Component } from '@angular/core';
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
  public materialSeleccionado: string; // Variable para almacenar el material seleccionado
  public materialesSeleccionados: Material[] = []; // Lista de materiales seleccionados

  constructor(private ejercicioService: EjercicioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cargarMateriales(); // Cargar materiales al inicializar el componente
    this.cargarEjercicio();
  }

  cargarEjercicio(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.ejercicioService.getEjercicio(id).subscribe((ejercicio) => {
          this.ejercicio = ejercicio;
          // Cargar los materiales asociados al ejercicio
          this.materialesSeleccionados = ejercicio.materiales || [];
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
    // Encontrar el material correspondiente al ID seleccionado
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
}
