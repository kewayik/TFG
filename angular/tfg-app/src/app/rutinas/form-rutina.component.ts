import { Component, OnInit } from '@angular/core';
import { Rutina } from './rutina';
import { RutinaService } from './rutina.service';
import { Diarutina } from '../diasrutinas/diarutina';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from '../usuarios/usuario';

@Component({
  selector: 'app-form-rutina',
  templateUrl: './form-rutina.component.html'
})
export class FormRutinaComponent implements OnInit {

  public rutina: Rutina = new Rutina();
  public titulo: string = "Crear Rutina";
  public diasRutina: Diarutina[] = [];
  public diasSeleccionados: Diarutina[] = [];
  public selectedDia: Diarutina;
  public usuarios: Usuario[] = [];
  public usuarioSeleccionado: Usuario;
  public rutinaPersonalizada: boolean = false;

  constructor(private rutinaService: RutinaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDiasRutina();
    this.cargarRutina();
    this.cargarUsuarios();
  }

  cargarRutina(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.rutinaService.getRutina(id).subscribe((rutina) => {
          this.rutina = rutina;
          this.diasSeleccionados = rutina.diasRutinas || [];
        });
      }
    });
  }

  cargarDiasRutina(): void {
    this.rutinaService.getDiasRutina().subscribe(
      dias => {
        this.diasRutina = dias;
      },
      error => {
        console.error(error);
      }
    );
  }

  cargarUsuarios(): void {
      this.rutinaService.getUsuarios().subscribe(
        usuarios => {
          this.usuarios = usuarios;
        },
        error => {
          console.error(error);
        }
      );
  }


  agregarDia(dia: Diarutina): void {
    if (!this.diasSeleccionados.includes(dia)) {
      this.diasSeleccionados.push(dia);
    }
  }

  eliminarDia(dia: Diarutina): void {
    const index = this.diasSeleccionados.indexOf(dia);
    if (index !== -1) {
      this.diasSeleccionados.splice(index, 1);
    }
  }

  guardar(): void {
    this.rutina.diasRutinas = this.diasSeleccionados;
    this.rutina.usuario = this.usuarioSeleccionado;

    this.rutinaService.create(this.rutina).subscribe(() => {
      swal.fire('Nueva Rutina', `La rutina ${this.rutina.nombre} ha sido creada con éxito`, 'success');
      this.router.navigate(['/rutinas']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Este usuario ya tiene una rutina personalizada', 'error');
    });
  }

  actualizar(): void {
    this.rutina.diasRutinas = this.diasSeleccionados;
    this.rutina.usuario = this.usuarioSeleccionado;
    this.rutinaService.update(this.rutina).subscribe(() => {
      swal.fire('Rutina Actualizada', `La rutina ${this.rutina.nombre} ha sido actualizada con éxito`, 'success');
      this.router.navigate(['/rutinas']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al actualizar la rutina', 'error');
    });
  }

}
