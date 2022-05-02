import { TestBed } from '@angular/core/testing';

import { CursoCandeactivate } from './curso-candeactivate.guard';

describe('CursoCandeactivateService', () => {
  let service: CursoCandeactivate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoCandeactivate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
