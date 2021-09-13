import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeLogadoComponent } from './home-logado/home-logado.component';
import { LoginComponent } from './login/login.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { FooterComponent } from './footer/footer.component';
import { CursosComponent } from './cursos/cursos.component';
import { NavbarlogadoComponent } from './navbarlogado/navbarlogado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TelaVideosComponent } from './tela-videos/tela-videos.component';
import {OrderModule} from "ngx-order-pipe";
import {ModalModule} from "ngx-bootstrap/modal";
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroEmpresaComponent,
    HomeComponent,
    CadastroComponent,
    CadastroProfessorComponent,
    LoginComponent,
    EsqueceuSenhaComponent,
    FooterComponent,
    HomeLogadoComponent,
    CursosComponent,
    NavbarlogadoComponent,
    UsuarioComponent,
    TelaVideosComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UsuarioEditComponent,
    AlertasComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
