import { Component, OnInit } from '@angular/core';
import { Actividad } from './actividad';
import { Usuario } from '../usuarios/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadService } from './actividad.service';
import { UsuarioService } from '../usuarios/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-actividad',
  templateUrl: './form-actividad.component.html'
})
export class FormActividadComponent implements OnInit {

  public actividad: Actividad = new Actividad();
  public titulo: string = "Crear Actividad";
  public creandoactividad: boolean = false;
  public entrenadoresOAdmins: Usuario[];

  constructor(
    private actividadService: ActividadService, 
    private usuarioService: UsuarioService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarActividad();
    this.usuarioService.getEntrenadoresOAdmins().subscribe(entrenadoresOAdmins => this.entrenadoresOAdmins = entrenadoresOAdmins);
  }

  cargarActividad(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.actividadService.getActividad(id).subscribe((actividad) => {
          this.actividad = actividad;
          this.titulo = "Editar Actividad";
        });
      }
    });
  }

  public create(): void {
    this.creandoactividad = true;
    this.actividadService.create(this.actividad).subscribe(
      actividad => {
        this.router.navigate(['/actividades']);
        swal.fire('Nueva Actividad', `La actividad ${actividad.nombre} ha sido creada con éxito`, 'success');
      },
      error => {
        this.creandoactividad = false;
      }
    );
  }

  public update(): void {
    this.actividadService.update(this.actividad).subscribe(
      actividad => {
        this.router.navigate(['/actividades']);
        swal.fire('Actividad Actualizada', `La actividad ${actividad.nombre} ha sido editada con éxito`, 'success');
      },
      error => {
        console.error(error);
      }
    );
  }
}
