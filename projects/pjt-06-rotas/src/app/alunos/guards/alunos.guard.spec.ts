import { TestBed } from '@angular/core/testing';

import { AlunosGuard } from './alunos.guard';

describe('AlunosGuardService', () => {
  let service: AlunosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunosGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
