import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import {AlunosService} from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosCandeactivateGuard } from './guards/alunos-candeactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';



@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers:[AlunosService,AlunosCandeactivateGuard,AlunoDetalheResolver]
})
export class AlunosModule { }
