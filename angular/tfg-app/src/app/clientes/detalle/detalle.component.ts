import { Component, Input } from '@angular/core';
import { Cliente } from '../cliente';
import {ClienteService} from '../cliente.service';
import { ModalService } from './modal.service';
import swal from 'sweetalert2';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  @Input() cliente: Cliente;
  titulo: string = "Detalle del cliente";
  public fotoSeleccionada: File;

  constructor(private clienteService: ClienteService, 
    public modalService: ModalService){ }


  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image')<0){
      swal.fire('Error al seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }

  subirFoto(){

    if(!this.fotoSeleccionada){
      swal.fire('Error: Upload: ', 'Debe seleccionar una foto', 'error');
    }else{

      this.clienteService.subirFoto(this.fotoSeleccionada, this.cliente.id)
      .subscribe(cliente=>{
        this.cliente = cliente;
        this.modalService.notificarUpload.emit(this.cliente);
        swal.fire('La foto se ha subido completamente!', `La foto se ha subido con éxito: ${this.cliente.foto}`, 'success');
      });
    }
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
  }

}
