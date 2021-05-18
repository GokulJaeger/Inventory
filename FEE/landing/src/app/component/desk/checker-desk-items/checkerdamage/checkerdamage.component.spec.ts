import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerdamageComponent } from './checkerdamage.component';

describe('CheckerdamageComponent', () => {
  let component: CheckerdamageComponent;
  let fixture: ComponentFixture<CheckerdamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckerdamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerdamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
