
import { Component, OnInit} from '@angular/core';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.scss']
})
export class ListadoDeResultadosComponent implements OnInit {

  public jugadores;
  public cargandoJugadores;

  constructor(private jugadorService: JugadorService) {
  }

  ngOnInit() {
    this.cargandoJugadores = true;
    this.jugadorService.obtenerJugadores().subscribe( response => {
      let jugadores = {}
      response.forEach(element => {
        jugadores[element.id] = {
          uid: element.id,
          jugador: element.data().nombre + " " + element.data().apellido
        };
      });
      this.jugadores = jugadores;
      this.cargandoJugadores = false;
    });
  }
}