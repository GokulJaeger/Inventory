import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporttosuppilierComponent } from './reporttosuppilier.component';

describe('ReporttosuppilierComponent', () => {
  let component: ReporttosuppilierComponent;
  let fixture: ComponentFixture<ReporttosuppilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporttosuppilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporttosuppilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
