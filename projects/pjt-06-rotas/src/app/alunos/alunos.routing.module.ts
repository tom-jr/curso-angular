import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosCandeactivateGuard } from './guards/alunos-candeactivate.guard';
import { AlunosGuard } from './guards/alunos.guard';

const routes: Routes = [
  {
    path: '', component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
      { path: ':id/editar', component: AlunoFormComponent },

    ], canActivateChild: [AlunosGuard],
    canDeactivate: [AlunosCandeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
