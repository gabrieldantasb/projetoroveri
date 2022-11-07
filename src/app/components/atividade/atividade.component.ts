import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {
  @Input()
  titulo: string = "Título da Atividade"
  @Input()
  horarioInicio:   string = "00:00"
  @Input()
  horarioFim:      string = "12:00"

  constructor() { }

  ngOnInit(): void {
  }

}
