import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../models/aluno.model';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno?: Aluno;
  subscription?: Subscription;
  constructor(private activeRoute: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    // this.subscription = this.activeRoute.params.subscribe((params: any) => {
    //   let id = params['id']
    //   this.aluno = this.alunosService.getAlunoById(id);
    // });

    this.subscription = this.activeRoute.data.subscribe((data)=>{
      this.aluno = data['aluno'];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  navigateToAlunoForm() {
    this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
  }
}
