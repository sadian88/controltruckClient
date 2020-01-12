import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarepuestoComponent } from './comprarepuesto.component';

describe('ComprarepuestoComponent', () => {
  let component: ComprarepuestoComponent;
  let fixture: ComponentFixture<ComprarepuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarepuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
