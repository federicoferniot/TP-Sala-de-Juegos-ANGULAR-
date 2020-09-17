import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {InputTextModule} from 'primeng/inputtext';


import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AgmCoreModule } from '@agm/core';
import { AlertComponent } from './componentes/alert/alert.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { MemoriaComponent } from './componentes/memoria/memoria.component';
import { MisDatosComponent } from './componentes/mis-datos/mis-datos.component';
import { ListadoAdivinaComponent } from './componentes/listado-adivina/listado-adivina.component';
import { ListadoAgilidadComponent } from './componentes/listado-agilidad/listado-agilidad.component';
import { ListadoPptComponent } from './componentes/listado-ppt/listado-ppt.component';
import { ListadoMemoriaComponent } from './componentes/listado-memoria/listado-memoria.component';
import { ListadoTatetiComponent } from './componentes/listado-tateti/listado-tateti.component';
import { ListadoAnagramaComponent } from './componentes/listado-anagrama/listado-anagrama.component';
import { ManejarUsuarioComponent } from './componentes/manejar-usuario/manejar-usuario.component';
import { PerfilJugadorComponent } from './componentes/perfil-jugador/perfil-jugador.component';
import { PerfilJugadorDialogComponent } from './componentes/perfil-jugador-dialog/perfil-jugador-dialog.component';

var config = {
  apiKey: "AIzaSyDrLUL-SiiyAvn2pppCY_GZfiLgahSGtUY",
  authDomain: "pruebaapp-cdfc4.firebaseapp.com",
  databaseURL: "https://pruebaapp-cdfc4.firebaseio.com",
  projectId: "pruebaapp-cdfc4",
  storageBucket: "pruebaapp-cdfc4.appspot.com",
  messagingSenderId: "351570567450",
  appId: "1:351570567450:web:6c03fcc1c2a45a5a05cca3"
};

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    JugadoresListadoComponent,
    AlertComponent,
    RecuperarComponent,
    PptComponent,
    TatetiComponent,
    MemoriaComponent,
    MisDatosComponent,
    ListadoAdivinaComponent,
    ListadoAgilidadComponent,
    ListadoPptComponent,
    ListadoMemoriaComponent,
    ListadoTatetiComponent,
    ListadoAnagramaComponent,
    ManejarUsuarioComponent,
    PerfilJugadorComponent,
    PerfilJugadorDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RuteandoModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSelectModule,
    MatSortModule,
    InputTextModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
