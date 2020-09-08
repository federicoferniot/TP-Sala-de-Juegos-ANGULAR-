import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  LoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

  Logout(){
    this.authService.logout().then( res => {
      this.router.navigate((['/Login']));
    });
  }

}
