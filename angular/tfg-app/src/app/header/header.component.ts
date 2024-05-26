import { Component, Input } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Usuario } from "../usuarios/usuario";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
 title: string = 'Gym Manager'

 @Input() usuarios: Usuario[] = [];

 constructor(private authService: AuthService, private router: Router){}

 get login(){
    return this.authService.usuario;
 }

 get admin(){
    return this.authService.isAdmin();
 }

 get entrenador(){
    return this.authService.isEntrenador();
 }

 get authenticated(){
      return this.authService.authenticated();
   }

 handlerLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  get verPerfil(){
      if(this.authService.authenticated()){
         return "/usuarios/ver-usuario/" + this.authService.usuario.usuario.id;
      }
     return null;
   }
}
