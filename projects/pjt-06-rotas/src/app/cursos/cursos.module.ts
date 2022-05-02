import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './cursos.service';
import { CursoCandeactivate } from './guards/curso-candeactivate.guard';
import { CursoDetalheResolve } from './guards/curso-detalhe.resolve';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalhesComponent,
    CursoNotFoundComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
  ],
  exports: [
  ],
  providers: [
    CursosService, CursoDetalheResolve, CursoCandeactivate
  ]
})
export class CursosModule { }
