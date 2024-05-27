import { Component, OnInit } from '@angular/core';
import { Rutina } from './rutina';
import { AuthService } from '../auth/auth.service';
import { RutinaService } from './rutina.service';

@Component({
  selector: 'app-ver-rutina-personalizada',
  templateUrl: './ver-rutina-personalizada.component.html'
})
export class VerRutinaPersonalizadaComponent implements OnInit {

  public rutina: Rutina | null = null;
  nombre: string = '';

  constructor(
    private rutinaService: RutinaService,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    const usuarioId = this.authService.usuario.usuario.id;
    this.nombre = this.authService.usuario.usuario.nombre + ' ' + this.authService.usuario.usuario.apellidos;
    this.rutinaService.getRutinaPersonalizada(usuarioId).subscribe(
      rutina => {
        this.rutina = rutina;
      },
      err => {
        console.error('Error al cargar la rutina personalizada', err);
      }
    );
  }
}
