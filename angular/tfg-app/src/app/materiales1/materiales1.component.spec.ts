import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materiales1Component } from './materiales1.component';

describe('Materiales1Component', () => {
  let component: Materiales1Component;
  let fixture: ComponentFixture<Materiales1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Materiales1Component]
    });
    fixture = TestBed.createComponent(Materiales1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
