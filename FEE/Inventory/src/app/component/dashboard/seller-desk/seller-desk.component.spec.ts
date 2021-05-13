import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDeskComponent } from './seller-desk.component';

describe('SellerDeskComponent', () => {
  let component: SellerDeskComponent;
  let fixture: ComponentFixture<SellerDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
