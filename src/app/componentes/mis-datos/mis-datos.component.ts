import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/servicios/auth.service';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {
  public jugador;
  public avatar = "/assets/imagenes/avatar/001-man.png";

  constructor(private jugadorService: JugadorService, private authService: AuthService) { }

  ngOnInit(): void {
    (this.jugadorService.obtenerJugador(this.authService.userLoggedIn.uid)).subscribe(resultado => {
      this.jugador = resultado.payload.data();
    })
  }

}
