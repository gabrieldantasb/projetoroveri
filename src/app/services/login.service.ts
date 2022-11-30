import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppGlobalService } from '../app-global.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private appService: AppGlobalService, private router: Router) { }

  async login(apelido: string, senha: string): Promise<any> {
    const url = `${environment.urlApi}/usuario/login`
    const body = { apelido, senha }
    const res: any = await this.http.post(url, body).toPromise();

    if(res.error) return res;

    AppGlobalService.usuario = res;
    AppGlobalService.autenticado = true;
    this.router.navigate([''])
  }
}
