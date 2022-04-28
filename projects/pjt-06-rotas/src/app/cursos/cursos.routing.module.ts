import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursoDetalhesComponent } from "./curso-detalhes/curso-detalhes.component";
import { CursoNotFoundComponent } from "./curso-not-found/curso-not-found.component";
import { CursosComponent } from "./cursos.component";

const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: CursoDetalhesComponent },
    { path: 'not-found', component: CursoNotFoundComponent },
];
@NgModule({
    imports:[RouterModule.forChild(cursosRoutes)],
    exports:[RouterModule]
}
)
export class CursosRoutingModule{

}