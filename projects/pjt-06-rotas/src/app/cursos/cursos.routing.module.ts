import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursoDetalhesComponent } from "./curso-detalhes/curso-detalhes.component";
import { CursoNotFoundComponent } from "./curso-not-found/curso-not-found.component";
import { CursosComponent } from "./cursos.component";
import { CursoCandeactivate } from "./guards/curso-candeactivate.guard";
import { CursoDetalheResolve } from "./guards/curso-detalhe.resolve";

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: 'not-found', component: CursoNotFoundComponent },
    { path: ':id', component: CursoDetalhesComponent, resolve: { curso: CursoDetalheResolve }, canDeactivate: [CursoCandeactivate] },
];
@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
}
)
export class CursosRoutingModule {

}