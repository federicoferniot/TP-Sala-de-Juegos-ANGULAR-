import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilJugadorDialogComponent } from './perfil-jugador-dialog.component';

describe('PerfilJugadorDialogComponent', () => {
  let component: PerfilJugadorDialogComponent;
  let fixture: ComponentFixture<PerfilJugadorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilJugadorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilJugadorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
