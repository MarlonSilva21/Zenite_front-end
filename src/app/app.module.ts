import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';

import { NavbarComponent } from './navbar/navbar.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { HomeComponent } from './home/home.component';

import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroEmpresaComponent,
    HomeComponent,
    CadastroComponent,
    CadastroProfessorComponent,
    LoginComponent,
    EsqueceuSenhaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
