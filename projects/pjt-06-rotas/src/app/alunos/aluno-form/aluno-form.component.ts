import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  aluno?: any;
  subscription!: Subscription;
  constructor(private activeRoute: ActivatedRoute, private router: Router, private alunosService: AlunosService) { }

  ngOnInit(): void {

    this.subscription = this.activeRoute.params.subscribe((params) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAlunoById(id);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
