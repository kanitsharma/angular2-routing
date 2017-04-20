import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fault3Component } from './fault3.component';

describe('Fault3Component', () => {
  let component: Fault3Component;
  let fixture: ComponentFixture<Fault3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fault3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fault3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
