import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  usuarios: Usuario[];
  mostrarDadoDeAlta: boolean = true;

  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  toggleUsuarios() {
    this.mostrarDadoDeAlta = !this.mostrarDadoDeAlta;
}

  darDeAlta(usuario: Usuario): void{
    usuario.dadoDeAlta = true;
    this.usuarioService.update(usuario).subscribe(
      response => {
        Swal.fire(
          'Usuario dado de alta!',
          `Usuario ${usuario.nombre} dado de alta con éxito.`,
          'success'
        )
      }
    )
  }

  darDeBaja(usuario: Usuario): void{
    usuario.dadoDeAlta = false;
    this.usuarioService.update(usuario).subscribe(
      response => {
        Swal.fire(
          'Usuario dado de baja!',
          `Usuario ${usuario.nombre} dado de baja con éxito.`,
          'success'
        )
      }
    )
  }

  delete (usuario: Usuario): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar el usuario ${usuario.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(usuario.id).subscribe(
          response => {
            this.usuarios = this.usuarios.filter(usu => usu !== usuario)
            Swal.fire(
              'Usuario Eliminado!',
              `Usuario ${usuario.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )
      }
    });
  }
}
