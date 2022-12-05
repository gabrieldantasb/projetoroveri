import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss'],
})
export class AtividadeComponent implements OnInit {
  @Input()
  atividade: any;

  @Output()
  atualizar: EventEmitter<any> = new EventEmitter();

  constructor(private atividadeService: AtividadeService) {}

  ngOnInit(): void {}

  async deletarAtividade() {
    const res = await this.atividadeService.deletarAtividade(this.atividade.id);

    if (res) {
      this.atualizar.emit()
    }
  }
}
