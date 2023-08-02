import { Component } from '@angular/core';
import { Material } from './material';
import { MaterialService } from './material.service';
import swal from 'sweetalert2'
import {tap} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html'
})
export class MaterialesComponent {

  public materiales: Material[];
  paginador:any;

  constructor(private materialService: MaterialService,
    private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      if(!page){
        page=0;
      } 
    this.materialService.getMateriales(page)
    .pipe(
      tap(response => {
        console.log('MaterialesComponent: tap 3');
        (response.content as Material[]).forEach(material =>{
          console.log(material.nombre);
        });
      })
    ).subscribe(response => {
      this.materiales = response.content as Material[]
      this.paginador=response;
  });
})}

  /*let page = 0;
    this.materialService.getMateriales(page).subscribe(
      materiales => this.materiales = materiales
    );*/

  delete(material: Material): void{
    swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al material ${material.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.materialService.delete(material.id).subscribe(
          response => {
            this.materiales = this.materiales.filter(cli => cli !== material)
        
          swal.fire(
            'Eliminado!',
            `Material ${material.nombre} eliminado con éxito`,
            'success'
          )
          }
        )
      }
    })
  }

}
