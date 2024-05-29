import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

  email: string;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    swal.fire({
      title: 'Enviando...',
      text: 'Por favor espera un momento',
      allowOutsideClick: false,
      didOpen: () => {
        swal.showLoading();
      }
    });

    this.authService.requestPasswordReset(this.email).subscribe(
      response => {
        swal.fire({
          title: 'Éxito',
          text: 'Se ha enviado un enlace de restablecimiento de contraseña a tu correo',
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/login']);
        });
      },
      error => {
        swal.close();
        if (error.status === 404) {
          swal.fire('Error', 'No se encontró ninguna cuenta asociada a este correo', 'error');

        } else if (error.status === 200) {
          swal.fire({
            title: 'Éxito',
            text: 'Se ha enviado un enlace de restablecimiento de contraseña a tu correo, por favor revisa tu bandeja de entrada',
            icon: 'success'
          }).then(() => {
            this.router.navigate(['/home']);
          });
        } else {
          swal.fire('Error', 'Ocurrió un error al enviar el enlace de restablecimiento de contraseña ', 'error');
          
        }
      }
    );
  }
}
