import { TestBed } from '@angular/core/testing';

import { RtService } from './rt.service';

describe('RtService', () => {
  let service: RtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
