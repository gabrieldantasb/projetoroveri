import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { isAuth } from './utils/auth';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [isAuth], title: 'Minha area de trabalho' },
  { path: 'login', component: LoginComponent, title: 'Login | Cadastro' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
