import { Component } from '@angular/core';
import { Diarutina } from './diarutina';
import { ActivatedRoute, Router } from '@angular/router';
import { DiarutinaService } from '../diasrutinas/diarutina.service';
import swal from 'sweetalert2';
import { Ejercicio } from '../ejercicios/ejercicio';

@Component({
  selector: 'app-form-diarutina',
  templateUrl: './form-diarutina.component.html'
})
export class FormDiarutinaComponent {

  public diarutina: Diarutina = new Diarutina();
  public titulo: string = "Crear Día de rutina";
  public ejercicios: Ejercicio[] = [];
  public ejerciciosSeleccionados: Ejercicio[] = []; // Array para almacenar los ejercicios seleccionados
  public selectedEjercicio: Ejercicio;

  constructor(private diarutinaService: DiarutinaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEjercicios();
  }

  cargarEjercicios(): void {
    this.diarutinaService.getEjercicios().subscribe(
      ejercicios => {
        this.ejercicios = ejercicios;
      },
      error => {
        console.error(error);
      }
    );
  }

  agregarEjercicio(ejercicio: Ejercicio): void {
    if (!this.ejerciciosSeleccionados.includes(ejercicio)) {
      this.ejerciciosSeleccionados.push(ejercicio);
    }
  }

  eliminarEjercicio(ejercicio: Ejercicio): void {
    const index = this.ejerciciosSeleccionados.indexOf(ejercicio);
    if (index !== -1) {
      this.ejerciciosSeleccionados.splice(index, 1);
    }
  }

  guardar(): void {
    this.diarutina.ejercicios = this.ejerciciosSeleccionados;

    this.diarutinaService.create(this.diarutina).subscribe(() => {
      swal.fire('Nueva Díarutina', `La diarutina ${this.diarutina.nombre} ha sido creada con éxito`, 'success');
      this.router.navigate(['/rutinas']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al crear la diarutina', 'error');
    });
  }


}
