import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTatetiComponent } from './listado-tateti.component';

describe('ListadoTatetiComponent', () => {
  let component: ListadoTatetiComponent;
  let fixture: ComponentFixture<ListadoTatetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTatetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTatetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
