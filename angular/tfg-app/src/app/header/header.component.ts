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

 handlerLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
