import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { ActividadesComponent } from './actividades/actividades.component';
import { DiasrutinasComponent } from './diasrutinas/diasrutinas.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { GimnasiosComponent } from './gimnasios/gimnasios.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { RegistrosComponent } from './registros/registros.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormActividadComponent } from './actividades/form-actividad.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { VerEjercicioComponent } from './ejercicios/ver-ejercicio.component';
import { FormEjercicioComponent } from './ejercicios/form-ejercicio.component';
import { VerMaterialComponent } from './materiales/ver-material.component';
import { FormMaterialComponent } from './materiales/form-material.component';
import { VerNotificacionComponent } from './notificaciones/ver-notificacion.component';
import { FormNotificacionComponent } from './notificaciones/form-notificacion.component';
import { VerUsuariosComponent } from './actividades/ver-usuarios.component';
import { VerRutinaComponent } from './rutinas/ver-rutina.component';
import { FormRutinaComponent } from './rutinas/form-rutina.component';
import { FormDiarutinaComponent } from './diasrutinas/form-diarutina.component';
import { VerUsuarioComponent } from './usuarios/ver-usuario.component';
import { FormUsuarioComponent } from './usuarios/form-usuario.component';
import { PoliticasComponent } from './politicas/politicas.component';

registerLocaleData(localeES, 'es');

const routes: Routes = [

  {path: '',redirectTo: '/usuarios', pathMatch:'full'},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'actividades/form-actividad', component: FormActividadComponent},
  {path: 'actividades/form-actividad/:id', component: FormActividadComponent},
  {path: 'actividades/ver-usuarios/:id', component: VerUsuariosComponent},
  {path: 'gimnasio', component: GimnasiosComponent},
  {path: 'ejercicios', component: EjerciciosComponent},
  {path: 'ejercicios/ver-ejercicio/:id', component: VerEjercicioComponent},
  {path: 'ejercicios/form-ejercicio', component: FormEjercicioComponent},
  {path: 'ejercicios/form-ejercicio/:id', component: FormEjercicioComponent},
  {path: 'materiales', component: MaterialesComponent},
  {path: 'materiales/ver-material/:id', component: VerMaterialComponent},
  {path: 'materiales/form-material', component: FormMaterialComponent},
  {path: 'materiales/form-material/:id', component: FormMaterialComponent},
  {path: 'notificaciones', component: NotificacionesComponent},
  {path: 'notificaciones/ver-notificacion/:id', component: VerNotificacionComponent},
  {path: 'notificaciones/form-notificacion', component: FormNotificacionComponent},
  {path: 'rutinas', component: RutinasComponent},
  {path: 'rutinas/ver-rutina/:id', component: VerRutinaComponent},
  {path: 'rutinas/form-rutina', component: FormRutinaComponent},
  {path: 'rutinas/form-rutina/:id', component: FormRutinaComponent},
  {path: 'diasrutinas', component: DiasrutinasComponent},
  {path: 'diasrutinas/form-diarutina', component: FormDiarutinaComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/ver-usuario/:id', component: VerUsuarioComponent},
  {path: 'usuarios/form-usuario', component: FormUsuarioComponent},
  {path: 'usuarios/form-usuario/:id', component: FormUsuarioComponent},
  {path: 'politicas', component: PoliticasComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginatorComponent,
    ActividadesComponent,
    DiasrutinasComponent,
    EjerciciosComponent,
    GimnasiosComponent,
    NotificacionesComponent,
    RegistrosComponent,
    RutinasComponent,
    UsuariosComponent,
    FormActividadComponent,
    MaterialesComponent,
    VerEjercicioComponent,
    FormEjercicioComponent,
    VerMaterialComponent,
    FormMaterialComponent,
    VerNotificacionComponent,
    FormNotificacionComponent,
    VerUsuariosComponent,
    VerRutinaComponent,
    FormRutinaComponent,
    FormDiarutinaComponent,
    VerUsuarioComponent,
    FormUsuarioComponent,
    PoliticasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
