import { TestBed } from '@angular/core/testing';

import { TechnologyChangeHistoryService } from './technology-change-history.service';

describe('TechnologyChangeHistoryService', () => {
  let service: TechnologyChangeHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyChangeHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
