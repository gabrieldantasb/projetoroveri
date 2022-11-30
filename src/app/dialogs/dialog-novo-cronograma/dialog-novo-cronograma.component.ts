import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CronogramaService } from 'src/app/services/cronograma.service';

@Component({
  selector: 'app-dialog-novo-cronograma',
  templateUrl: './dialog-novo-cronograma.component.html',
  styleUrls: ['./dialog-novo-cronograma.component.scss']
})
export class DialogNovoCronogramaComponent implements OnInit {
  titulo: string = ``

  constructor(
    public dialogRef: MatDialogRef<DialogNovoCronogramaComponent>,
    private cronogramaService: CronogramaService
  ) {

  }

  ngOnInit(): void {
  }

  async criarCronograma() {
    if (!this.titulo) return;

    try {
      const res = await this.cronogramaService.criarCronograma(this.titulo)
      console.log(`tudo deu certo`, res)
      this.dialogRef.close(true)
    } catch (err) {
      console.log(`algo deu errado`)
    }

  }

}
