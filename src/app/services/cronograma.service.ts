import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppGlobalService } from '../app-global.service';

@Injectable({
  providedIn: 'root',
})
export class CronogramaService {
  constructor(private http: HttpClient) {}

  async criarCronograma(titulo: string) {
    const url = `${environment.urlApi}/cronograma`;
    const body = {
      titulo,
      usuarioId: AppGlobalService.usuario.id,
    };

    return this.http.post(url, body).toPromise();
  }

  async listarTodos(id: number) {
    const url = `${environment.urlApi}/cronograma/usuarioId=${id}`;

    return this.http.get(url).toPromise();
  }

  async deletarCronograma(id: number) {
    const url = `${environment.urlApi}/cronograma/${id}`;
    
    return this.http.delete(url).toPromise();
  }
}
