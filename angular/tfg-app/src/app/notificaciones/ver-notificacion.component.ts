import { Component } from '@angular/core';
import { Notificacion } from './notificacion';

import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from './notificacion.service';

@Component({
  selector: 'app-ver-notificacion',
  templateUrl: './ver-notificacion.component.html'
})
export class VerNotificacionComponent {
  public notificacion: Notificacion = new Notificacion(); 

  constructor(private notificacionService: NotificacionService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.notificacionService.getNotificacion(id).subscribe((notificacion) => this.notificacion = notificacion) 
      }
    })
  }
}
