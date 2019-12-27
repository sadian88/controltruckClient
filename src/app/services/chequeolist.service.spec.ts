import { TestBed } from '@angular/core/testing';

import { ChequeolistService } from './chequeolist.service';

describe('ChequeolistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChequeolistService = TestBed.get(ChequeolistService);
    expect(service).toBeTruthy();
  });
});
