import { Component, Input, OnInit } from '@angular/core';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-memoria',
  templateUrl: './listado-memoria.component.html',
  styleUrls: ['./listado-memoria.component.css']
})
export class ListadoMemoriaComponent implements OnInit {

  private _jugadores;
  public cargandoMemoria = true;
  public puntajesMemoria = [];
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('memoria').get().subscribe( response => {
        response.forEach( element => {
          this.puntajesMemoria.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
        });
        this.cargandoMemoria = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
