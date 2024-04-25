import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuarios/usuario';
import { Actividad } from '../actividades/actividad';
import { ActividadService } from '../actividades/actividad.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html'
})
export class VerUsuariosComponent implements OnInit {

  actividad: Actividad;
  
  constructor(private activatedRoute: ActivatedRoute, private actividadService: ActividadService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const actividadId = +params.get('id');
      this.actividadService.getActividad(actividadId).subscribe(actividad => {
        this.actividad = actividad;
      });
    });
  }

  eliminarUsuario(usuario: Usuario): void {
    swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar a ${usuario.nombre} ${usuario.apellidos} de la actividad?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.actividad.usuarios.indexOf(usuario);
        if (index !== -1) {
          this.actividad.usuarios.splice(index, 1);
          this.actividadService.update(this.actividad).subscribe(() => {
            swal.fire('¡Eliminado!', 'El usuario ha sido eliminado de la actividad.', 'success');
          });
        }
      }
    });
  }

}
