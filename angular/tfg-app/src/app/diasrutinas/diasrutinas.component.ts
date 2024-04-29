import { Component } from '@angular/core';
import { DiarutinaService } from './diarutina.service';
import { Diarutina } from './diarutina';

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
}
