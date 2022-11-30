import { Injectable } from '@angular/core';

type IUsuario = {
  id: number,
  apelido: string,
  createdAt?: Date,
  updatedAt?: Date,
}


@Injectable({
  providedIn: 'root'
})
export class AppGlobalService {
  static usuario: IUsuario = {
    id: 0,
    apelido: ''
  }
  static autenticado: boolean = false;

  constructor() { }
}
