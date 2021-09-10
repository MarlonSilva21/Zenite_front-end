import { Component, OnInit } from '@angular/core';
import {UsuarioEstudanteLogin} from "../model/UsuarioEstudanteLogin";
import {AuthService} from "../service/auth.service";
import {Route, Router} from "@angular/router";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  estudanteLogin: UsuarioEstudanteLogin = new UsuarioEstudanteLogin

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.estudanteLogin).subscribe((resp: UsuarioEstudanteLogin) => {
      this.estudanteLogin = resp

      environment.token = this.estudanteLogin.token
      environment.nome = this.estudanteLogin.nome
      environment.foto = this.estudanteLogin.foto
      environment.id = this.estudanteLogin.id

      this.router.navigate(['/homeLogado'])
    }, erro => {
      if (erro.status == 500){
        alert('Email ou senha estão errados!')
      }
      })
  }
}
