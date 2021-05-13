import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WargoodsComponent } from './wargoods.component';

describe('WargoodsComponent', () => {
  let component: WargoodsComponent;
  let fixture: ComponentFixture<WargoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WargoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WargoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
