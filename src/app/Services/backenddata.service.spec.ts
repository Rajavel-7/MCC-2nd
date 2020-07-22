import { TestBed } from '@angular/core/testing';

import { BackenddataService } from './backenddata.service';

describe('BackenddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackenddataService = TestBed.get(BackenddataService);
    expect(service).toBeTruthy();
  });
});
