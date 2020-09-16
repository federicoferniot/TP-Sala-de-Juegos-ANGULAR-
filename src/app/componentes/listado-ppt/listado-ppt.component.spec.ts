import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPptComponent } from './listado-ppt.component';

describe('ListadoPptComponent', () => {
  let component: ListadoPptComponent;
  let fixture: ComponentFixture<ListadoPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
