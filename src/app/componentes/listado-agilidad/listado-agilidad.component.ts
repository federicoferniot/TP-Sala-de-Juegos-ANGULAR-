import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puntaje } from 'app/clases/puntaje';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-agilidad',
  templateUrl: './listado-agilidad.component.html',
  styleUrls: ['./listado-agilidad.component.css']
})
export class ListadoAgilidadComponent implements OnInit {

  private _jugadores;
  private _agilidad: Puntaje[];
  public cantidad = 0;
  public cargandoAgilidad = true;
  public puntajesAgilidad;
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @ViewChild(MatSort) sort: MatSort;

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      this.cargandoAgilidad = true;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('agilidad').get().subscribe( response => {
        this._agilidad = [];
        response.forEach( element => {
          this._agilidad.push(<Puntaje>{
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
          this.cantidad++;
        });
        this.puntajesAgilidad = new MatTableDataSource(this._agilidad);
        this.cargandoAgilidad = false;
        this.puntajesAgilidad.sort = this.sort;
      });
    }
  };

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
