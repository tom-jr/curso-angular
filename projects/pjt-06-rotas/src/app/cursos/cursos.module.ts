import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursosService } from './cursos.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routing.module';
import { CursosRoutingModule } from './cursos.routing.module';



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
  exports:[
  ],
  providers:[
    CursosService
  ]
})
export class CursosModule { }
