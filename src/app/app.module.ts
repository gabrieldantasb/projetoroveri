import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TabelaCronogramaComponent } from './components/tabela-cronograma/tabela-cronograma.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { ImportarExportarComponent } from './components/importar-exportar/importar-exportar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TabelaCronogramaComponent,
    AtividadeComponent,
    ImportarExportarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
