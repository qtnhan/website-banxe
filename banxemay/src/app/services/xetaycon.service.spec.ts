import { TestBed } from '@angular/core/testing';

import { XetayconService } from './xetaycon.service';

describe('XetayconService', () => {
  let service: XetayconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XetayconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
