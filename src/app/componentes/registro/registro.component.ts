import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'app/servicios/alert.service';
import { AuthService } from 'app/servicios/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  hide = true;

  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      correo: ['', Validators.required],
      clave: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.form.controls; }

  registrar() {
    this.submitted = true;

    this.alertService.clear();

    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.authService.register(this.form.value.correo, this.form.value.clave)
        .then(data => {
                this.alertService.success('Se ha registrado correctamente', { keepAfterRouteChange: true });
                this.router.navigate(['/Login']);
            })
        .catch(error => {
                this.alertService.error(error.message);
                console.log(error);
                this.loading = false;
              });
  }

}
