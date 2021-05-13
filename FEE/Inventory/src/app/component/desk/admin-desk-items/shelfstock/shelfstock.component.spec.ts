import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfstockComponent } from './shelfstock.component';

describe('ShelfstockComponent', () => {
  let component: ShelfstockComponent;
  let fixture: ComponentFixture<ShelfstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelfstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
