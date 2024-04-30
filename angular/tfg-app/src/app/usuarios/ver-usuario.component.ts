import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html'
})
export class VerUsuarioComponent {
  
  public usuario: Usuario = new Usuario(); 

  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe((usuario) => this.usuario = usuario)
      }
    })
  }
}
