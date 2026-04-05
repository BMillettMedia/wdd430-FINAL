import { TestBed } from '@angular/core/testing';

import { Confidant } from './confidant';

describe('Confidant', () => {
  let service: Confidant;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Confidant);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
