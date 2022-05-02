import { TestBed } from '@angular/core/testing';

import { CursosGuardService } from './cursos.guard';

describe('CursosGuardService', () => {
  let service: CursosGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
