import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TabelaCronogramaComponent } from './components/tabela-cronograma/tabela-cronograma.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { ImportarExportarComponent } from './components/importar-exportar/importar-exportar.component';
import { DialogNovoCronogramaComponent } from './dialogs/dialog-novo-cronograma/dialog-novo-cronograma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogNovaAtividadeComponent } from './dialogs/dialog-nova-atividade/dialog-nova-atividade.component';

import { ToolsService } from './services/tools.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TabelaCronogramaComponent,
    AtividadeComponent,
    ImportarExportarComponent,
    DialogNovoCronogramaComponent,
    DialogNovaAtividadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
