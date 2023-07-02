import { Component } from '@angular/core';
import {Cliente} from './cliente'
import {ActivatedRoute, Router} from '@angular/router'
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  public cliente: Cliente = new Cliente()
  public titulo:string = "Crear Cliente"

  constructor(private clienteService: ClienteService, 
  private router: Router,
  private activatedRoute: ActivatedRoute){}

    ngOnInit(){
      this.cargarCliente()
    }

  cargarCliente(): void{
      this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.clienteService.getCliente(id).subscribe((cliente)=>this.cliente=cliente)
        }
      })
  }

  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      cliente => { 
      this.router.navigate(['/clientes'])
      swal.fire('Nuevo cliente', `El cliente ${cliente.nombre}: ha sido creado con éxito`,'success')
    }
    )
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe( json => {
      this.router.navigate(['/clientes'])
      swal.fire('Cliente Actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success')
    })
  }


}
