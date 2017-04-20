import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fault1Component } from './fault1.component';

describe('Fault1Component', () => {
  let component: Fault1Component;
  let fixture: ComponentFixture<Fault1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fault1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fault1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
