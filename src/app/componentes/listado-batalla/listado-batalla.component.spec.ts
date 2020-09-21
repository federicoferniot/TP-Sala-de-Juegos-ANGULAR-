import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBatallaComponent } from './listado-batalla.component';

describe('ListadoBatallaComponent', () => {
  let component: ListadoBatallaComponent;
  let fixture: ComponentFixture<ListadoBatallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoBatallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoBatallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
