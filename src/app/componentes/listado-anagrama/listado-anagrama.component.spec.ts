import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAnagramaComponent } from './listado-anagrama.component';

describe('ListadoAnagramaComponent', () => {
  let component: ListadoAnagramaComponent;
  let fixture: ComponentFixture<ListadoAnagramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAnagramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
