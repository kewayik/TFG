import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { ClienteService } from './clientes/cliente.service';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { DetalleComponent } from './clientes/detalle/detalle.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { MaterialService } from './materiales/material.service';
import { FormMatComponent } from './materiales/form-mat.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { DiasrutinasComponent } from './diasrutinas/diasrutinas.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { GimnasiosComponent } from './gimnasios/gimnasios.component';
import { Materiales1Component } from './materiales1/materiales1.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { RegistrosComponent } from './registros/registros.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormActividadComponent } from './actividades/form-actividad.component';

registerLocaleData(localeES, 'es');

const routes: Routes = [

  {path: '',redirectTo: '/clientes', pathMatch:'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/page/:page', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'materiales', component: MaterialesComponent},
  {path: 'materiales/form-mat', component: FormMatComponent},
  {path: 'materiales/form-mat/:id', component: FormMatComponent},
  {path: 'materiales/page/:page', component: MaterialesComponent},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'actividades/form-actividad', component: FormActividadComponent},
  {path: 'actividades/form-actividad/:id', component: FormActividadComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    MaterialesComponent,
    FormMatComponent,
    ActividadesComponent,
    DiasrutinasComponent,
    EjerciciosComponent,
    GimnasiosComponent,
    Materiales1Component,
    NotificacionesComponent,
    RegistrosComponent,
    RutinasComponent,
    UsuariosComponent,
    FormActividadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [ClienteService, MaterialService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
