import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';
import { SharingDataService } from '../sharing-data.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  usuarios: Usuario[];
  mostrarDadoDeAlta: boolean = true;
  orderByApellidoAsc: boolean = true;
  orderByNombreAsc: boolean = true;
  orderByCorreoAsc: boolean = true;
  searchTerm: string = '';

  constructor(private usuarioService: UsuarioService, sharingData: SharingDataService, private authService: AuthService) { }
  
  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  
  get admin() {
    return this.authService.isAdmin();
  }

  get entrenador() {
    return this.authService.isEntrenador();
  }

  toggleUsuarios() {
    this.mostrarDadoDeAlta = !this.mostrarDadoDeAlta;
}

filterUsuarios() {
  if (this.searchTerm === '') {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  } else {
    this.usuarios = this.usuarios.filter(usuario => 
      usuario.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      usuario.apellidos.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

toggleOrderByApellido() {
  this.orderByApellidoAsc = !this.orderByApellidoAsc;
  this.usuarios.sort((a, b) => {
    if (this.orderByApellidoAsc) {
      return a.apellidos.localeCompare(b.apellidos);
    } else {
      return b.apellidos.localeCompare(a.apellidos);
    }
  });
}

toggleOrderByNombre() {
  this.orderByNombreAsc = !this.orderByNombreAsc;
  this.usuarios.sort((a, b) => {
    if (this.orderByNombreAsc) {
      return a.nombre.localeCompare(b.nombre);
    } else {
      return b.nombre.localeCompare(a.nombre);
    }
  });
}

toggleOrderByCorreo() {
  this.orderByCorreoAsc = !this.orderByCorreoAsc;
  this.usuarios.sort((a, b) => {
    if (this.orderByCorreoAsc) {
      return a.email.localeCompare(b.email);
    } else {
      return b.email.localeCompare(a.email);
    }
  });
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
