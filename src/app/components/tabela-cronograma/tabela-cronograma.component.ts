import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-cronograma',
  templateUrl: './tabela-cronograma.component.html',
  styleUrls: ['./tabela-cronograma.component.scss']
})
export class TabelaCronogramaComponent implements OnInit {

  @Input()
  titulo: string = "Título do Cronograma"

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
