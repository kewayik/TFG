import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {

  token: string;
  newPassword: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  onSubmit() {
    this.authService.resetPassword(this.token, this.newPassword).subscribe(
      response => {
        swal.fire('Éxito', 'Tu contraseña ha sido restablecida con éxito', 'success')
          .then(() => {
            this.router.navigate(['/login']);
          });
      },
      error => {
        if (error.status === 200){
          swal.fire('Éxito', 'Tu contraseña ha sido restablecida con éxito', 'success')
          .then(() => {
            this.router.navigate(['/login']);
          });
        }else{
        swal.fire('Error', 'Ocurrió un error al restablecer tu contraseña', 'error');
        }
      }
    );
  }
}
