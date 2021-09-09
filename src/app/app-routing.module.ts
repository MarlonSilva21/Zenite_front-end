import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {CadastroEmpresaComponent} from "./cadastro-empresa/cadastro-empresa.component";
import {EsqueceuSenhaComponent} from "./esqueceu-senha/esqueceu-senha.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {NavbarComponent} from "./navbar/navbar.component";
import { HomeLogadoComponent } from './home-logado/home-logado.component';
import { TelaVideosComponent } from './tela-videos/tela-videos.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'navbar', component: NavbarComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro-estudante', component: CadastroComponent},
  {path:'cadastro-professor', component: CadastroProfessorComponent},
  {path:'cadastro-empresa', component: CadastroEmpresaComponent},
  {path:'esqueceu-senha', component: EsqueceuSenhaComponent},
  {path:'footer', component: FooterComponent},
  {path: 'homeLogado', component: HomeLogadoComponent},
  {path: 'telaDeVideos', component: TelaVideosComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
