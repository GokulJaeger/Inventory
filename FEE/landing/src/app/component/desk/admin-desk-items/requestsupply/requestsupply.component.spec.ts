import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsupplyComponent } from './requestsupply.component';

describe('RequestsupplyComponent', () => {
  let component: RequestsupplyComponent;
  let fixture: ComponentFixture<RequestsupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
