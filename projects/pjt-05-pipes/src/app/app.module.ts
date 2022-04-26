import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import br from '@angular/common/locales/pt-PT'
registerLocaleData(br,'br');

import { AppComponent } from './app.component';
import { ExemplosPipeComponent } from './exemplos-pipe/exemplos-pipe.component';
import { CamelCasePipe } from './camel-case.pipe';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipeComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,useValue:'br'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
