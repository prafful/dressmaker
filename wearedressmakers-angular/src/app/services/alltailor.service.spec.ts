import { TestBed } from '@angular/core/testing';

import { AlltailorService } from './alltailor.service';

describe('AlltailorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlltailorService = TestBed.get(AlltailorService);
    expect(service).toBeTruthy();
  });
});
