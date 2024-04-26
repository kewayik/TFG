import { Component } from '@angular/core';
import { Rutina } from './rutina';
import { ActivatedRoute, Router } from '@angular/router';
import { RutinaService } from './rutina.service';

@Component({
  selector: 'app-ver-rutina',
  templateUrl: './ver-rutina.component.html'
})
export class VerRutinaComponent {

  public rutina: Rutina = new Rutina();

  constructor(private rutinaService: RutinaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.rutinaService.getRutina(id).subscribe((rutina) => this.rutina = rutina)
      }
    })
  }
}
