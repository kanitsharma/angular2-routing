import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fault2Component } from './fault2.component';

describe('Fault2Component', () => {
  let component: Fault2Component;
  let fixture: ComponentFixture<Fault2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fault2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fault2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
