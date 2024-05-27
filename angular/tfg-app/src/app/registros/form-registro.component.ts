import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';
import { Ejercicio } from '../ejercicios/ejercicio';
import { EjercicioService } from '../ejercicios/ejercicio.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html'
})
export class FormRegistroComponent implements OnInit {

  registro: Registro = new Registro();
  ejercicios: Ejercicio[] = [];
  titulo: string = "Crear Registro de Ejercicio";

  constructor(
    private registroService: RegistroService,
    private ejercicioService: EjercicioService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.ejercicioService.getEjercicios().subscribe(ejercicios => this.ejercicios = ejercicios);
  }

  crear(): void {
    this.registro.usuario = this.authService.usuario.usuario.id;
    this.registroService.create(this.registro).subscribe(
      registro => {
        this.router.navigate(['/registros']);
      }
    );
  }
}
