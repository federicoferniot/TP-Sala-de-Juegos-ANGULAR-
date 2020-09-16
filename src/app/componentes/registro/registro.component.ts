import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'app/servicios/alert.service';
import { AuthService } from 'app/servicios/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { JugadorService } from 'app/servicios/jugador.service';
import { DatosService } from 'app/servicios/datos.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  loading = false;
  cargandoAvatars;
  submitted = false;
  hide = true;
  avatars;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
    private jugadorService: JugadorService,
    private datosService: DatosService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      clave: ['', [Validators.required, Validators.minLength(6)],],
      imagen: ['', Validators.required]
    });
    this.avatars = [];
    this.cargandoAvatars = true;
    this.datosService.obtenerAvatars().subscribe( resultado =>{
      resultado.data().nombres.forEach(element => {
        this.avatars.push(`./assets/imagenes/avatar/${element}.png`);
      });
      this.cargandoAvatars = false;
    });
  }

  get f() { return this.form.controls; }

  mostrar(){
    console.log(this.form.value.imagen);
  }

  registrar() {
    this.submitted = true;

    this.alertService.clear();

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.form.value.correo, this.form.value.clave)
      .then((data) => {
        this.jugadorService.nuevoJugador(
          data.user.uid,
          this.form.value.nombre,
          this.form.value.apellido,
          this.form.value.correo,
          this.form.value.imagen);
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
