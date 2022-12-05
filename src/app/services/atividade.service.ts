import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AtividadeService {
  constructor(private http: HttpClient) {}

  listarAtividadesPorCronograma(cronogramaId: number) {
    const url = `${environment.urlApi}/atividade/cronogramaId=${cronogramaId}`;

    return this.http.get(url).toPromise();
  }

  criarAtividade(
    titulo: string,
    horarioInicial: string,
    horarioFinal: string,
    cronogramaId: number
  ) {
    const url = `${environment.urlApi}/atividade`;

    const body = {
      titulo,
      horarioInicial,
      horarioFinal,
      cronogramaId,
    };
    return this.http.post(url, body).toPromise();
  }

  deletarAtividade(id: number) {
    const url = `${environment.urlApi}/atividade/${id}`;
    return this.http.delete(url).toPromise();
  }
}
