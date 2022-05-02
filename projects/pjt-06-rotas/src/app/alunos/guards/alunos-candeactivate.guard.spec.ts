import { TestBed } from '@angular/core/testing';

import { AlunosCandeactivateGuard } from './alunos-candeactivate.guard';

describe('AlunosCandeactivateGuardService', () => {
  let service: AlunosCandeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunosCandeactivateGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
