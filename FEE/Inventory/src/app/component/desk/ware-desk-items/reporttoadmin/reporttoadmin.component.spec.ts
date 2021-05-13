import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporttoadminComponent } from './reporttoadmin.component';

describe('ReporttoadminComponent', () => {
  let component: ReporttoadminComponent;
  let fixture: ComponentFixture<ReporttoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporttoadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporttoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
