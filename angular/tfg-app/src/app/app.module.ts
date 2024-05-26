import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
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
import { HomeComponent } from './home/home.component';
import { FormRegistroComponent } from './registros/form-registro.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './guards/auth.guard';
import { Forbidden403Component } from './forbidden403/forbidden403.component';
import { AuthService } from './auth/auth.service';
import { TokenInterceptor } from './interceptors/token.interceptor';

registerLocaleData(localeES, 'es');

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'actividades', component: ActividadesComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'actividades/form-actividad', component: FormActividadComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'actividades/form-actividad/:id', component: FormActividadComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'actividades/ver-usuarios/:id', component: VerUsuariosComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'gimnasio', component: GimnasiosComponent, data: { role: 'cliente' }},
  {path: 'ejercicios', component: EjerciciosComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'ejercicios/ver-ejercicio/:id', component: VerEjercicioComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'ejercicios/form-ejercicio', component: FormEjercicioComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'ejercicios/form-ejercicio/:id', component: FormEjercicioComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'materiales', component: MaterialesComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'materiales/ver-material/:id', component: VerMaterialComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'materiales/form-material', component: FormMaterialComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'materiales/form-material/:id', component: FormMaterialComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'notificaciones', component: NotificacionesComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'notificaciones/ver-notificacion/:id', component: VerNotificacionComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'notificaciones/form-notificacion', component: FormNotificacionComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'rutinas', component: RutinasComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'rutinas/ver-rutina/:id', component: VerRutinaComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'rutinas/form-rutina', component: FormRutinaComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'rutinas/form-rutina/:id', component: FormRutinaComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'diasrutinas', component: DiasrutinasComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'diasrutinas/form-diarutina', component: FormDiarutinaComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'diasrutinas/form-diarutina/:id', component: FormDiarutinaComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'usuarios', component: UsuariosComponent, canActivate: [authGuard], data: { role: 'entrenador' }},
  {path: 'usuarios/ver-usuario/:id', component: VerUsuarioComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'usuarios/form-usuario', component: FormUsuarioComponent},
  {path: 'usuarios/form-usuario/:id', component: FormUsuarioComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'politicas', component: PoliticasComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registros', component: RegistrosComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'registros/form-registro', component: FormRegistroComponent, canActivate: [authGuard], data: { role: 'cliente' }},
  {path: 'login', component: AuthComponent},
  {path: 'forbidden', component: Forbidden403Component},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    PoliticasComponent,
    HomeComponent,
    FormRegistroComponent,
    AuthComponent,
    Forbidden403Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
