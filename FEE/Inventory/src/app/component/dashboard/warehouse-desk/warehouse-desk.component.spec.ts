import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseDeskComponent } from './warehouse-desk.component';

describe('WarehouseDeskComponent', () => {
  let component: WarehouseDeskComponent;
  let fixture: ComponentFixture<WarehouseDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
