import { TestBed } from '@angular/core/testing';

import { StaticepageserService } from './staticepageser.service';

describe('StaticepageserService', () => {
  let service: StaticepageserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticepageserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
