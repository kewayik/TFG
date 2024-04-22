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

  cargarEjercicio(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ejercicioService.getEjercicio(id).subscribe((ejercicio) => this.ejercicio = ejercicio)
      }
    })
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
    // Convertir materialSeleccionado a number
    const materialId: number = Number(this.materialSeleccionado);
    // Verificar si el materialId es un número válido
    if (!isNaN(materialId)) {
        // Encontrar el material correspondiente al ID
        const material = this.materiales.find(mat => mat.id === materialId);
        if (material && !this.materialesSeleccionados.includes(material)) {
            this.materialesSeleccionados.push(material);
        }
    }
}


  eliminarMaterial(material: Material): void {
    const index = this.materialesSeleccionados.indexOf(material);
    if (index !== -1) {
      this.materialesSeleccionados.splice(index, 1);
    }
  }

  reiniciarSeleccion(): void {
    this.materialesSeleccionados = [];
  }

  guardar(): void{
    this.creandoEjercicio = true;
    // Convertir materiales seleccionados a List<String[]>
    const materialesStringArray: string[][] = this.materialesSeleccionados.map(material => [material.id.toString(), material.nombre]);
    // Enviar datos del ejercicio y materiales seleccionados al servicio para guardar
    this.ejercicioService.create({...this.ejercicio, materiales: materialesStringArray}).subscribe(
      ejercicio => {
        this.router.navigate(['/ejercicios'])
        swal.fire('Nuevo Ejercicio', `El ejercicio ${ejercicio.nombre} ha sido creado con éxito`, 'success');
      },
      error => {
        this.creandoEjercicio = false;
    });
  }

  actualizar(): void{
    // Convertir materiales seleccionados a List<String[]>
    const materialesStringArray: string[][] = this.materialesSeleccionados.map(material => [material.id.toString(), material.nombre]);
    // Enviar datos del ejercicio y materiales seleccionados al servicio para actualizar
    this.ejercicioService.update({...this.ejercicio, materiales: materialesStringArray}).subscribe(
      ejercicio => {
        this.router.navigate(['/ejercicios'])
        swal.fire('Ejercicio Actualizado', `El ejercicio ${ejercicio.nombre} ha sido editado con éxito`, 'success')
      },
      error => {
        console.error(error);
      }
    );
  }
}
