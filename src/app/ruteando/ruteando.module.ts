import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from '../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { PptComponent } from 'app/componentes/ppt/ppt.component';
import { TatetiComponent } from 'app/componentes/tateti/tateti.component';
import { MemoriaComponent } from 'app/componentes/memoria/memoria.component';
import { AnagramaComponent } from 'app/componentes/anagrama/anagrama.component';
import { AuthGuardService } from 'app/servicios/auth-guard.service';
import { MisDatosComponent } from 'app/componentes/mis-datos/mis-datos.component';


// declaro donde quiero que se dirija
const MiRuteo = [
  { path: 'Jugadores', canActivate: [AuthGuardService], component: JugadoresListadoComponent },
  { path: '', component: PrincipalComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'QuienSoy', component: QuienSoyComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Principal', component: PrincipalComponent },
  { path: 'Listado', canActivate: [AuthGuardService], component: ListadoComponent },
  { path: 'MisDatos', canActivate: [AuthGuardService], component: MisDatosComponent},

  {
    path: 'Juegos',
    component: JuegosComponent,
    canActivate: [AuthGuardService],
    children:
      [{ path: '', component: MenuCardComponent },
      { path: 'Adivina', component: AdivinaElNumeroComponent },
      { path: 'AdivinaMasListado', component: AdivinaMasListadoComponent },
      { path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent },
      { path: 'Ppt', component: PptComponent },
      { path: 'Tateti', component: TatetiComponent },
      { path: 'Memoria', component: MemoriaComponent },
      { path: 'Anagrama', component: AnagramaComponent }]
  },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
