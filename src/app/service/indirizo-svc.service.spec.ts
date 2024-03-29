import { TestBed } from '@angular/core/testing';

import { IndirizoSvcService } from './indirizo-svc.service';

describe('IndirizoSvcService', () => {
  let service: IndirizoSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndirizoSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
