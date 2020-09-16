import { Component, Input, OnInit } from '@angular/core';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-ppt',
  templateUrl: './listado-ppt.component.html',
  styleUrls: ['./listado-ppt.component.css']
})
export class ListadoPptComponent implements OnInit {

  private _jugadores;
  public cargandoPpt = true;
  public puntajesPpt = [];
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('ppt').get().subscribe( response => {
        response.forEach( element => {
          this.puntajesPpt.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
        });
        this.cargandoPpt = false;
      });
    }
  }
  

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
