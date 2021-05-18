import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingstockComponent } from './incomingstock.component';

describe('IncomingstockComponent', () => {
  let component: IncomingstockComponent;
  let fixture: ComponentFixture<IncomingstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
