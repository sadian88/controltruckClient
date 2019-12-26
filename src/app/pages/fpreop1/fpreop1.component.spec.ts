import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FPreop1Component } from './fpreop1.component';

describe('FPreop1Component', () => {
  let component: FPreop1Component;
  let fixture: ComponentFixture<FPreop1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FPreop1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FPreop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
