import { TestBed } from '@angular/core/testing';

import { XetaygaService } from './xetayga.service';

describe('XetaygaService', () => {
  let service: XetaygaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XetaygaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
