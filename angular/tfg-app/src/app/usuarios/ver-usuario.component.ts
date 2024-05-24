import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html'
})
export class VerUsuarioComponent {
  
  public usuario: Usuario = new Usuario(); 

  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe((usuario) => this.usuario = usuario)
      }
    })
  }

  public editarPerfil(){
    this.router.navigate(['usuarios/form-usuario', this.usuario.id])
  }

  get mismoUsuario() {
    return this.authService.usuario.usuario.id === this.usuario.id;
  }
}
