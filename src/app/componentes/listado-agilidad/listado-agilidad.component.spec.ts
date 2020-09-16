import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAgilidadComponent } from './listado-agilidad.component';

describe('ListadoAgilidadComponent', () => {
  let component: ListadoAgilidadComponent;
  let fixture: ComponentFixture<ListadoAgilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAgilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAgilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
