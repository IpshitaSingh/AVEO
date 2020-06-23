import { TestBed } from '@angular/core/testing';

import { UserHomeGuardGuard } from './user-home-guard.guard';

describe('UserHomeGuardGuard', () => {
  let guard: UserHomeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserHomeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
