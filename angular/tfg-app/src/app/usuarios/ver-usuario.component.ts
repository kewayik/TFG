import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Rutina } from '../rutinas/rutina';
import { RutinaService } from '../rutinas/rutina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html'
})
export class VerUsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario(); 
  public rutina: Rutina = null;
  public rutinas: Rutina[];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private rutinaService: RutinaService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.usuarioService.getUsuario(id).subscribe(usuario => {
          this.usuario = usuario;
          this.cargarRutinaPersonalizada();
        });
      }
    });
    this.rutinaService.getRutinas().subscribe(
      rutinas => this.rutinas = rutinas
    );
  }

  cargarRutinaPersonalizada() {
    this.rutinaService.getRutinaPersonalizada(this.usuario.id).subscribe((rutina) => {
      this.rutina = rutina;
    });
  }

  get entrenador() {
    return this.authService.isEntrenador();
  }

  get admin() {
    return this.authService.isAdmin();
  }

  get mismoUsuario() {
    return this.authService.usuario.usuario.id === this.usuario.id;
  }

  public editarRutina() {
    if (this.rutina) {
      this.router.navigate(['rutinas/form-rutina', this.rutina.id]);
    }
  }

  public editarPerfil() {
    this.router.navigate(['usuarios/form-usuario', this.usuario.id]);
  }

  eliminarRutina(): void {
    if (!this.rutina) {
      Swal.fire('Error', 'No se encontró la rutina personalizada para este usuario', 'error');
      return;
    }
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar la rutina ${this.rutina.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.rutinaService.delete(this.rutina.id).subscribe(
          response => {
            this.rutinas = this.rutinas.filter(rut => rut !== this.rutina);
            this.rutina = null;
            Swal.fire(
              'Rutina Eliminada!',
              `Rutina ${this.rutina.nombre} eliminada con éxito.`,
              'success'
            );
          }
        );
      }
    });
  }
}
