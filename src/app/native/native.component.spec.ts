import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeComponent } from './native.component';

describe('NativeComponent', () => {
  let component: NativeComponent;
  let fixture: ComponentFixture<NativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
