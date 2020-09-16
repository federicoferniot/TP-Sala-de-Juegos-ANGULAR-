import { Component, Input, OnInit } from '@angular/core';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-anagrama',
  templateUrl: './listado-anagrama.component.html',
  styleUrls: ['./listado-anagrama.component.css']
})
export class ListadoAnagramaComponent implements OnInit {

  private _jugadores;
  public cargandoAnagrama = true;
  public puntajesAnagrama = [];
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('anagrama').get().subscribe( response => {
        response.forEach( element => {
          this.puntajesAnagrama.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
        });
        this.cargandoAnagrama = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
