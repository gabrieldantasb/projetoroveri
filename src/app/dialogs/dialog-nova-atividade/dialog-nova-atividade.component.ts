import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-dialog-nova-atividade',
  templateUrl: './dialog-nova-atividade.component.html',
  styleUrls: ['./dialog-nova-atividade.component.scss'],
})
export class DialogNovaAtividadeComponent implements OnInit {
  cronogramaId: number;
  titulo: string = '';
  horarioInicial: string = '';
  horarioFinal: string = '';
  horarios: string[] = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00'];

  constructor(
    public dialogRef: MatDialogRef<DialogNovaAtividadeComponent>,
    private atividadeService: AtividadeService,
    @Inject(MAT_DIALOG_DATA) public data: { crongoramaId: number }
  ) {
    this.cronogramaId = data.crongoramaId;
  }

  ngOnInit(): void {}

  async criarAtividade() {
    if (!this.titulo || !this.horarioFinal || !this.horarioInicial) return;
    try {
      const res = await this.atividadeService.criarAtividade(
        this.titulo,
        this.horarioInicial,
        this.horarioFinal,
        this.cronogramaId
      );
      this.dialogRef.close(true);
    } catch (err) {
    }
  }
}
