import { Component } from '@angular/core';
import { Material } from './material';
import { MaterialService } from './material.service';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html'
})
export class MaterialesComponent {

  materiales: Material[];

  constructor(private materialService: MaterialService){ }

  ngOnInit(): void {
    this.materialService.getMateriales().subscribe(
      materiales => this.materiales = materiales
    );
  }

}
