import { Component, Input, OnInit } from '@angular/core';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-tateti',
  templateUrl: './listado-tateti.component.html',
  styleUrls: ['./listado-tateti.component.css']
})
export class ListadoTatetiComponent implements OnInit {

  private _jugadores;
  public cargandoTateti = true;
  public puntajesTateti = [];
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('tateti').get().subscribe( response => {
        response.forEach( element => {
          this.puntajesTateti.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
        });
        this.cargandoTateti = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
