import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovelistComponent } from './approvelist.component';

describe('ApprovelistComponent', () => {
  let component: ApprovelistComponent;
  let fixture: ComponentFixture<ApprovelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
