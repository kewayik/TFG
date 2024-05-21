import { Component } from '@angular/core';
import { SharingDataService } from './sharing-data.service';
import { AuthService } from './auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from './usuarios/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a angular';

  usuarios: Usuario[] = [];

  constructor(private sharingData: SharingDataService, private authService: AuthService, private router: Router){

  }

  ngOnInit(): void{
    
    this.handlerLogin();
  }

  handlerLogin() {
    this.sharingData.handlerLoginEventEmitter.subscribe(({ username, password }) => {
      console.log(username + ' ' + password);

      this.authService.loginUsuario({ username, password }).subscribe({
        next: response => {
          const token = response.token;
          console.log(token);
          const payload =  this.authService.getPayload(token);
          console.log(payload);
          const usuario = {username: payload.username};
          console.log(usuario);
          const login = {
            usuario,
            isAuth: true,
            isAdmin: payload.isAdmin
          }
          console.log(login);
          this.authService.usuario = login;
          this.authService.token = token;
          this.router.navigate(['/home']);
          
        },
        error: error => {
          if (error.status == 401) {
            Swal.fire('Error en el Login', error.error.message, 'error')
          } else {
            throw error;
          }
        }
      })
    })
  }

}
