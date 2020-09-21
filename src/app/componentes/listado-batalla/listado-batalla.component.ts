import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puntaje } from 'app/clases/puntaje';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-batalla',
  templateUrl: './listado-batalla.component.html',
  styleUrls: ['./listado-batalla.component.css']
})
export class ListadoBatallaComponent implements OnInit {


  private _jugadores;
  private _batalla: Puntaje[];
  public cantidad = 0;
  public cargandoBatalla = true;
  public cargandoJugadores = true;
  public puntajesBatalla;
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @ViewChild(MatSort) sort: MatSort;

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      this.cargandoBatalla = true;
      this.cargandoJugadores = true;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('batalla').get().subscribe( response => {
        this._batalla = [];
        response.forEach( element => {
          this._batalla.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
          this.cantidad++;
        });
        this.puntajesBatalla = new MatTableDataSource(this._batalla);
        this.puntajesBatalla.sort = this.sort;
        this.cargandoBatalla = false;
        this.cargandoJugadores = false;
      });
    }
  }

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
