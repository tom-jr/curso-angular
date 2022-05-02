import { TestBed } from '@angular/core/testing';
import { CursoDetalheResolve} from './curso-detalhe.resolve';


describe('CursoDetalhe.ResolveService', () => {
  let service: CursoDetalheResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoDetalheResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
