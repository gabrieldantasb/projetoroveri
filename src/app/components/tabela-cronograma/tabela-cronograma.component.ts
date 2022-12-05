import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNovaAtividadeComponent } from 'src/app/dialogs/dialog-nova-atividade/dialog-nova-atividade.component';
import { AtividadeService } from 'src/app/services/atividade.service';
import { CronogramaService } from 'src/app/services/cronograma.service';

@Component({
  selector: 'app-tabela-cronograma',
  templateUrl: './tabela-cronograma.component.html',
  styleUrls: ['./tabela-cronograma.component.scss'],
})
export class TabelaCronogramaComponent implements OnInit {
  @Input()
  id!: number;

  @Input()
  titulo: string = 'Título do Cronograma';

  @Output()
  atualizar: EventEmitter<any> = new EventEmitter();
  
  atividades: any[] = [];

  constructor(
    private dialog: MatDialog,
    private atividadeService: AtividadeService,
    private cronogramaService: CronogramaService
  ) {}

  ngOnInit() {
    this.listarAtividades();
  }

  async chamarDialogNovaAtividade() {
    const dialogCriarAtividade = this.dialog.open(
      DialogNovaAtividadeComponent,
      {
        data: { crongoramaId: this.id },
      }
    );

    const res = await dialogCriarAtividade.afterClosed().toPromise();

    if (dialogCriarAtividade) this.listarAtividades();
  }

  async listarAtividades() {
    this.atividades =
      (await this.atividadeService.listarAtividadesPorCronograma(
        this.id
      )) as any[];
  }

  async deletarCronograma() {
    const res = await this.cronogramaService.deletarCronograma(this.id)

    if(res){
      this.atualizar.emit();
    }
  }
}
