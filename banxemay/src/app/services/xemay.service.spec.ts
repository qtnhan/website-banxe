import { TestBed } from '@angular/core/testing';

import { XemayService } from './xemay.service';

describe('XemayService', () => {
  let service: XemayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XemayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
