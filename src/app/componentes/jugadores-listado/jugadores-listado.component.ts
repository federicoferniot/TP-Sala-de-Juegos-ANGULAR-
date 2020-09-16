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
}

export interface Jugador {
  nombre: string;
  apellido: string;
  correo: string;
}