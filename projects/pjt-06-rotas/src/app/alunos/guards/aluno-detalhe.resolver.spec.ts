import { TestBed } from '@angular/core/testing';

import { AlunoDetalheResolver } from './aluno-detalhe.resolver';

describe('AlunoDetalheResouveResolverService', () => {
  let service: AlunoDetalheResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoDetalheResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
