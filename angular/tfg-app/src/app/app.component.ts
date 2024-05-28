import { Component } from '@angular/core';
import { SharingDataService } from './sharing-data.service';
import { AuthService } from './auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from './usuarios/usuario';
import { UsuarioService } from './usuarios/usuario.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a angular';

  usuarios: Usuario[] = [];

  constructor(
    private sharingData: SharingDataService, 
    private authService: AuthService, 
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.handlerLogin();
  }

  handlerLogin() {
    this.sharingData.handlerLoginEventEmitter.subscribe(({ username, password }) => {

      this.authService.loginUsuario({ username, password }).subscribe({
        next: response => {
          const token = response.token;
          const payload = this.authService.getPayload(token);

          this.usuarioService.getUsuarios().subscribe({
            next: usuarios => {
              const usuario = usuarios.find(u => u.username === username);
              if (usuario) {
                if(usuario.dadoDeAlta){
                  const login = {
                    usuario,
                    isAuth: true,
                    isAdmin: payload.isAdmin
                  }
                  this.authService.usuario = login;
                  this.authService.token = token;
                  this.router.navigate(['/home']);
                }else{
                  Swal.fire('Error en login', 'Usuario no dado de alta', 'error');
                }
              } else {
                Swal.fire('Error', 'Usuario no encontrado', 'error');
              }
            },
            error: error => {
              console.error('Error al obtener los usuarios', error);
              Swal.fire('Error', 'No se pudo obtener la lista de usuarios', 'error');
            }
          });
        },
        error: error => {
          if (error.status == 401) {
            Swal.fire('Error en el Login', error.error.message, 'error');
          } else {
            throw error;
          }
        }
      });
    });
  }
}
