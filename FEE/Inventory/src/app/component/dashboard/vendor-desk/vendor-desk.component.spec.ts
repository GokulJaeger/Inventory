import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDeskComponent } from './vendor-desk.component';

describe('VendorDeskComponent', () => {
  let component: VendorDeskComponent;
  let fixture: ComponentFixture<VendorDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
