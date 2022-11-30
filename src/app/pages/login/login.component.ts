import { Component, OnInit } from '@angular/core';
import { AppGlobalService } from 'src/app/app-global.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputApelido: string = ''
  inputSenha: string = ''

  constructor(private loginService: LoginService, private appService: AppGlobalService) {
    AppGlobalService.usuario = {id: 0, apelido: ``}
    AppGlobalService.autenticado = false;
  }

  ngOnInit(): void {
  }

  async login() {

    await this.loginService.login(this.inputApelido, this.inputSenha)
  }

}
