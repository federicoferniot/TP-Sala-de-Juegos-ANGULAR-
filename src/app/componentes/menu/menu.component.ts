import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Juego } from 'app/clases/juego';
import { AuthService } from 'app/servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() juego: Juego;
  opened = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  irAJuego(tipo: string) {
    this.opened = false;
    switch (tipo) {
      case 'adivina':
        this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'agilidad':
        this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'ppt':
        this.router.navigate(['/Juegos/Ppt']);
        break;
      case 'memoria':
        this.router.navigate(['/Juegos/Memoria']);
        break;
      case 'tateti':
        this.router.navigate(['/Juegos/Tateti']);
        break;
      case 'anagrama':
        this.router.navigate(['/Juegos/Anagrama']);
        break;
    }
  }

  salir() {
    this.authService.logout().then(response => {
      this.router.navigate((['/Login']));
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  toggleSideBar() {
    this.opened = !this.opened;
  }

  juegoSeleccionado(juego) {
    this.juego = juego;
  }

  obtenerInfo() {
    return this.juego.retornarInformacion();
  }

}
