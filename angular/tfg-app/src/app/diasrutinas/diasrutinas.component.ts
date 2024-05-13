import { Component } from '@angular/core';
import { DiarutinaService } from './diarutina.service';
import { Diarutina } from './diarutina';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diasrutinas',
  templateUrl: './diasrutinas.component.html'
})
export class DiasrutinasComponent {
  constructor(private diarutinaService: DiarutinaService) { }

  diasrutinas: Diarutina[];
  
  ngOnInit(){
    this.diarutinaService.getDiasRutinas().subscribe(
      diasrutinas => this.diasrutinas = diasrutinas
    );
  }

  delete (diarutina: Diarutina): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar el día de rutina ${diarutina.nombre} - ${diarutina.dia}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.diarutinaService.delete(diarutina.id).subscribe(
          response => {
            this.diasrutinas = this.diasrutinas.filter(dia => dia !== diarutina)
            Swal.fire(
              'Día de Rutina Eliminado!',
              `Día de Rutina ${diarutina.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )
      }
    });
  }
}
