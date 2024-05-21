import { Component } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import Swal from 'sweetalert2';
import { SharingDataService } from '../sharing-data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  usuario: Usuario;

  constructor(private sharingData: SharingDataService) {
    this.usuario = new Usuario();
  }

  onSubmit() {
    if(!this.usuario.username || !this.usuario.password) {
      Swal.fire(
        'Error de validación!',
        'Username o password vacíos!',
        'error'
      )
    }else {
      this.sharingData.handlerLoginEventEmitter.emit({username: this.usuario.username, password: this.usuario.password})
    }
  }

}
