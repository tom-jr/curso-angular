import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursoDetalhesComponent } from "./curso-detalhes/curso-detalhes.component";
import { CursoNotFoundComponent } from "./curso-not-found/curso-not-found.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: CursoDetalhesComponent },
    { path: 'not-found', component: CursoNotFoundComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);