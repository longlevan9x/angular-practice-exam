import { TestBed } from '@angular/core/testing';

import { Practice266Service } from './practice266.service';

describe('Practice266Service', () => {
  let service: Practice266Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice266Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
