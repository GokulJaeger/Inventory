import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopinstockComponent } from './shopinstock.component';

describe('ShopinstockComponent', () => {
  let component: ShopinstockComponent;
  let fixture: ComponentFixture<ShopinstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopinstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopinstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
