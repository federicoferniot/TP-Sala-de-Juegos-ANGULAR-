import { Component, Input, OnInit } from '@angular/core';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-agilidad',
  templateUrl: './listado-agilidad.component.html',
  styleUrls: ['./listado-agilidad.component.css']
})
export class ListadoAgilidadComponent implements OnInit {

  private _jugadores;

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      this.cargandoAgilidad = true;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('agilidad').get().subscribe( response => {
        response.forEach( element => {
          this.puntajesAgilidad.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
        });
        this.cargandoAgilidad = false;
      });
    }
  }
  ;
  public cargandoAgilidad = true;
  public puntajesAgilidad = [];
  public displayedColumns: string[] = ['jugador', 'puntos'];

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
