import { Component, Input, OnInit } from '@angular/core';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-adivina',
  templateUrl: './listado-adivina.component.html',
  styleUrls: ['./listado-adivina.component.css']
})
export class ListadoAdivinaComponent implements OnInit {

  private _jugadores;
  public cargandoAdivina = true;
  public puntajesAdivina = [];
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('adivina').get().subscribe( response => {
        response.forEach( element => {
          this.puntajesAdivina.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
        });
        this.cargandoAdivina = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
