import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Machine4Component } from './machine4.component';

describe('Machine4Component', () => {
  let component: Machine4Component;
  let fixture: ComponentFixture<Machine4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Machine4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Machine4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
