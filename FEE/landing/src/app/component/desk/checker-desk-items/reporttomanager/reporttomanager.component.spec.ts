import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporttomanagerComponent } from './reporttomanager.component';

describe('ReporttomanagerComponent', () => {
  let component: ReporttomanagerComponent;
  let fixture: ComponentFixture<ReporttomanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporttomanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporttomanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
