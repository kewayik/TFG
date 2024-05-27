import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';
import { AuthService } from '../auth/auth.service';
import { EjercicioService } from '../ejercicios/ejercicio.service';
import { Ejercicio } from '../ejercicios/ejercicio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html'
})
export class RegistrosComponent implements OnInit {

  usuarioId: number;
  ejercicios: Ejercicio[] = [];
  registros: Registro[] = [];
  selectedEjercicioId: number | null = null;
  ejerciciosMap: Map<number, Ejercicio> = new Map();

  constructor(
    private registroService: RegistroService,
    private authService: AuthService,
    private ejercicioService: EjercicioService
  ) { }

  ngOnInit(): void {
    this.usuarioId = this.authService.usuario.usuario.id;
    this.loadRegistros();
  }

  loadRegistros(): void {
    this.registroService.getRegistros().subscribe(registros => {
      this.registros = registros.filter(registro => registro.usuario === this.usuarioId);
      const ejercicioIds = new Set(this.registros.map(registro => registro.ejercicio));
      ejercicioIds.forEach(id => {
        this.ejercicioService.getEjercicio(id).subscribe(ejercicio => {
          this.ejercicios.push(ejercicio);
          this.ejerciciosMap.set(ejercicio.id, ejercicio);
        });
      });
    });
  }

  onEjercicioChange(ejercicioId: string): void {
    this.selectedEjercicioId = ejercicioId ? Number(ejercicioId) : null;
  }

  get registrosFiltrados(): Registro[] {
    return this.selectedEjercicioId !== null ? 
           this.registros.filter(registro => registro.ejercicio === this.selectedEjercicioId) : 
           [];
  }

  getEjercicioNombre(id: number): string {
    return this.ejerciciosMap.has(id) ? this.ejerciciosMap.get(id).nombre : '';
  }

  eliminarRegistro(registroId: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.delete(registroId).subscribe(() => {
          this.registros = this.registros.filter(registro => registro.id !== registroId);
          Swal.fire(
            'Eliminado',
            'El registro ha sido eliminado.',
            'success'
          );
        });
      }
    });
  }
}
