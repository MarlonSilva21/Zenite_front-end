import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {UsuarioEstudanteLogin} from "../model/UsuarioEstudanteLogin";
import {Observable} from "rxjs";
import {UsuarioEstudante} from "../model/UsuarioEstudante";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  entrar(estudanteLogin: UsuarioEstudanteLogin): Observable<UsuarioEstudanteLogin>{
    return this.http.post<UsuarioEstudanteLogin>('https://zenite.herokuapp.com/usuario/logar', estudanteLogin)

  }

  cadastrar(usuarioEstudante: UsuarioEstudante): Observable<UsuarioEstudante>{
    return this.http.post<UsuarioEstudante>('https://zenite.herokuapp.com/usuario/cadastrar', usuarioEstudante)
  }

}
