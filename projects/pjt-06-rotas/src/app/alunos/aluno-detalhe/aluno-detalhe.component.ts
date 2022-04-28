import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno?: any;
  subscription?: Subscription;
  constructor(private activeRoute: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.activeRoute.params.subscribe((params: any) => {
      let id = params['id']
      this.aluno = this.alunosService.getAlunoById(id);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  navigateToAlunoForm() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
