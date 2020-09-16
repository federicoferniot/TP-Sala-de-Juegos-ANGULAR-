import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puntaje } from 'app/clases/puntaje';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-listado-ppt',
  templateUrl: './listado-ppt.component.html',
  styleUrls: ['./listado-ppt.component.css']
})
export class ListadoPptComponent implements OnInit {

  private _jugadores;
  private _ppt: Puntaje[];
  public cantidad = 0;
  public cargandoPpt = true;
  public puntajesPpt;
  public displayedColumns: string[] = ['jugador', 'puntos'];

  @ViewChild(MatSort) sort: MatSort;

  @Input() public set value(v) {
    if(v){
      this._jugadores = v;
      let puntajes = this.jugadorService.obtenerResultado();
      puntajes.collection('ppt').get().subscribe( response => {
        response.forEach( element => {
          this._ppt = [];
          this._ppt.push({
            jugador: this._jugadores[element.id].jugador,
            puntos: element.data().puntos
          });
          this.cantidad++;
        });
        this.puntajesPpt = new MatTableDataSource(this._ppt);
        this.puntajesPpt.sort = this.sort;
        this.cargandoPpt = false;
      });
    }
  }
  
  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

}
