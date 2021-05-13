import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopgoodsComponent } from './shopgoods.component';

describe('ShopgoodsComponent', () => {
  let component: ShopgoodsComponent;
  let fixture: ComponentFixture<ShopgoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopgoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
