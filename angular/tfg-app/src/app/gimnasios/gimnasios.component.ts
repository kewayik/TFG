import { Component, OnInit } from '@angular/core';
import { Gimnasio } from './gimnasio';
import { GimnasioService } from './gimnasio.service';

@Component({
  selector: 'app-gimnasios',
  templateUrl: './gimnasios.component.html',
  styleUrls: ['./gimnasios.component.css']
})
export class GimnasiosComponent implements OnInit {

  gimnasio: Gimnasio;
  modoEdicion: boolean = false;
  gimnasioOriginal: Gimnasio;

  constructor(private gimnasioService: GimnasioService) {
    this.gimnasio = {
      nombre: 'Peso puma',
      telefono: 952695478,
      direccion: 'Calle Diego de Almenguer, 5',
      n_identificacion: '754169854M',
      email: 'dudasypreguntas@pesopuma.es'
    };
  }

  ngOnInit(): void {
    this.gimnasioService.updateGimnasio(this.gimnasio);
    this.gimnasioOriginal = { ...this.gimnasio };
  }

  editar(): void {
    this.modoEdicion = true;
  }

  cancelarEdicion(): void {
    this.gimnasio = { ...this.gimnasioOriginal };
    this.modoEdicion = false;
  }

  guardarEdicion(): void {
    this.gimnasioService.updateGimnasio(this.gimnasio);
    this.gimnasioOriginal = { ...this.gimnasio };
    this.modoEdicion = false;
  }
}
