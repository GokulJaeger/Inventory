import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerDeskComponent } from './checker-desk.component';

describe('CheckerDeskComponent', () => {
  let component: CheckerDeskComponent;
  let fixture: ComponentFixture<CheckerDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckerDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
