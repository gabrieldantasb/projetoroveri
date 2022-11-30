import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppGlobalService } from 'src/app/app-global.service';
import { DialogNovoCronogramaComponent } from 'src/app/dialogs/dialog-novo-cronograma/dialog-novo-cronograma.component';
import { CronogramaService } from 'src/app/services/cronograma.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuario: any = {}

  cronogramas: any[] = [];

  constructor(private dialog: MatDialog, private cronogramaService: CronogramaService) {
    this.usuario = AppGlobalService.usuario
  }

  ngOnInit(): void {
    this.listarTodos()
  }

  async listarTodos() {
    this.cronogramas = await this.cronogramaService.listarTodos(AppGlobalService.usuario.id) as any[]
  }

  async chamarDialogNovoCronograma() {
    let dialogNovoCronograma = this.dialog.open(DialogNovoCronogramaComponent, {
      width: '250px'
    });

    let result = await dialogNovoCronograma.afterClosed().toPromise();

    if(!result) return

    this.listarTodos()
  }

}
