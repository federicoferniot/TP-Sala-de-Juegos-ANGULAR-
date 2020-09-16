import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JugadorService } from 'app/servicios/jugador.service';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.scss']
})

export class JugadoresListadoComponent implements OnInit {

  dataSource;
  nombre;
  apellido;
  correo;
  jugadores: Jugador[];
  displayedColumns: string[] = ['nombre', 'apellido', 'correo'];
  cargando;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private jugadoresService: JugadorService) {

  }

  ngOnInit() {
    this.cargando = true;
    this.jugadoresService.obtenerJugadores().subscribe(response => {
      this.jugadores = [];
      response.forEach(el => {
        this.jugadores.push(<Jugador>el.data());
      });
      this.dataSource = new MatTableDataSource(this.jugadores);
      this.dataSource.sort = this.sort;
      this.cargando = false;
    })
  }

  configurarFiltro(column){
    this.dataSource.filterPredicate = (data: Jugador, filter: string) => {
      let retorno = false;
      switch (column) {
        case 'nombre':
          this.apellido = "";
          this.correo = "";
          retorno = data.nombre.toLowerCase().includes(filter.toLowerCase());
          break;
        case 'apellido':
          this.nombre = "";
          this.correo = "";
          retorno = data.apellido.toLowerCase().includes(filter.toLowerCase());
          break;
        case 'correo':
          this.nombre = "";
          this.apellido = "";
          retorno = data.correo.toLowerCase().includes(filter.toLowerCase());
          break;
      }
      return retorno;
    }
  }

  public aplicarFiltro(valor: string){
    this.dataSource.filter = valor;
  }
}

export interface Jugador {
  nombre: string;
  apellido: string;
  correo: string;
}