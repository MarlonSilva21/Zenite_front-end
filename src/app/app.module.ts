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
    NavbarlogadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
