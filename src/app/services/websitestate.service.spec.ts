import { TestBed } from '@angular/core/testing';

import { WebsitestateService } from './websitestate.service';

describe('WebsitestateService', () => {
  let service: WebsitestateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsitestateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
