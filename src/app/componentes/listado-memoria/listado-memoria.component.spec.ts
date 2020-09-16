import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMemoriaComponent } from './listado-memoria.component';

describe('ListadoMemoriaComponent', () => {
  let component: ListadoMemoriaComponent;
  let fixture: ComponentFixture<ListadoMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMemoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
