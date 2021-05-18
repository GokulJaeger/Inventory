import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdamagestockComponent } from './checkdamagestock.component';

describe('CheckdamagestockComponent', () => {
  let component: CheckdamagestockComponent;
  let fixture: ComponentFixture<CheckdamagestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckdamagestockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdamagestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
