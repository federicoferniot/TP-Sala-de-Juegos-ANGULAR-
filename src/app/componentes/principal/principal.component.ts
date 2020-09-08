import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/servicios/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private authService: AuthService) {  }

  ngOnInit() {
  }

  LoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

}
