import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html'
})
export class FormUsuarioComponent {

  public usuario: Usuario = new Usuario();
  public titulo: string = "Crear Usuario";
  public creandoUsuario: boolean = false;
  public fotoSeleccionada: File;

  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(){
    this.cargarUsuario();
  }

  Enlazar(): void{
    
    if(this.authService.isAdmin()){
      this.router.navigate(['/usuarios']);
    }else{
      this.router.navigate(['/home']);
    }
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  cargarUsuario(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.usuarioService.getUsuario(id).subscribe((usuario) => {
          this.usuario = usuario;
        });
      }
    });
  }

  guardar(): void {
    this.usuario.dadoDeAlta = false;
    this.usuarioService.create(this.usuario).subscribe(() => {
      swal.fire('Nuevo Usuario', `El usuario ${this.usuario.nombre} ha sido creado con éxito`, 'success');
      this.Enlazar();
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al crear el usuario', 'error');
    });
  }

  actualizar(): void {
    this.usuario.registros = [];
    this.usuarioService.update(this.usuario).subscribe(() => {
      swal.fire('Usuario Actualizado', `El usuario ${this.usuario.nombre} ha sido actualizado con éxito`, 'success');
      this.router.navigate(['/usuarios']);
    }, error => {
      console.error(error);
      swal.fire('Error', 'Ocurrió un error al actualizar el usuario', 'error');
    });
  }

  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image')<0){
      swal.fire('Error al seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }

  subirFoto(){
    this.usuarioService.subirFoto(this.fotoSeleccionada, this.usuario.id)
      .subscribe(usuario=>{
        this.usuario = usuario;
        swal.fire('La foto se ha subido completamente!', `La foto se ha subido con éxito: ${this.usuario.foto}`, 'success');
      });
  }
}
