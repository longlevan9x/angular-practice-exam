import { TestBed } from '@angular/core/testing';

import { PracticeHistoryService } from './practice-history.service';

describe('PracticeHistoryService', () => {
  let service: PracticeHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
