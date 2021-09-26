import { TestBed } from '@angular/core/testing';

import { ServiceFeatureService } from './service-feature.service';

describe('ServiceFeatureService', () => {
  let service: ServiceFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
