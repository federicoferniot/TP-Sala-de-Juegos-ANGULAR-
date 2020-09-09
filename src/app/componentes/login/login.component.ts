import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { AuthService } from '../../servicios/auth.service';
import { AlertService } from 'app/servicios/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { RecuperarComponent } from '../recuperar/recuperar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.form.value.correo, this.form.value.clave).then( res => {
      this.router.navigate(['/Principal']);
    })
    .catch(error => {
      this.alertService.error(error);
      this.loading = false;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(RecuperarComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.authService.sendPasswordResetEmail(result).then( res =>{
          this.alertService.success("Se envió el mail")
        })
        .catch( error =>{
          this.alertService.error(error.message);
        });
      }
    });
  }
}
