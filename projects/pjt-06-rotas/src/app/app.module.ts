import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlunosModule } from './alunos/alunos.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    AlunosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
