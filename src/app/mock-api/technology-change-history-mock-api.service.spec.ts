import { TestBed } from '@angular/core/testing';

import { TechnologyChangeHistoryMockApiService } from './technology-change-history-mock-api.service';

describe('TechnologyChangeHistoryMockApiService', () => {
  let service: TechnologyChangeHistoryMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyChangeHistoryMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
