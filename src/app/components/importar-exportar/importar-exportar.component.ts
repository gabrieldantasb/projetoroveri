import { Component, Input, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-importar-exportar',
  templateUrl: './importar-exportar.component.html',
  styleUrls: ['./importar-exportar.component.scss'],
})
export class ImportarExportarComponent implements OnInit {
  @Input()
  atividades: any[] = [];

  @Input()
  tituloCronograma: string = '';

  constructor(private toolsService: ToolsService) {}

  ngOnInit(): void {}

  exportar(){
    console.log('oi')
    this.toolsService.downloadFile(this.atividades, this.tituloCronograma);
  }
}
