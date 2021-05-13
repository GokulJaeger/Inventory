import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareinstockComponent } from './wareinstock.component';

describe('WareinstockComponent', () => {
  let component: WareinstockComponent;
  let fixture: ComponentFixture<WareinstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WareinstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WareinstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
