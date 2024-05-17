/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavesListComponent } from './naves-list.component';

describe('NavesListComponent', () => {
  let component: NavesListComponent;
  let fixture: ComponentFixture<NavesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
