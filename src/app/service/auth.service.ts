import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {UsuarioEstudanteLogin} from "../model/UsuarioEstudanteLogin";
import {Observable} from "rxjs";
import {UsuarioEstudante} from "../model/UsuarioEstudante";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  entrar(estudanteLogin: UsuarioEstudanteLogin): Observable<UsuarioEstudanteLogin>{
    return this.http.post<UsuarioEstudanteLogin>('https://redezenite.herokuapp.com/usuario/logar', estudanteLogin)

  }

  cadastrar(usuarioEstudante: UsuarioEstudante): Observable<UsuarioEstudante>{
    return this.http.post<UsuarioEstudante>('https://redezenite.herokuapp.com/usuario/cadastrar', usuarioEstudante)
  }

  getByIdUser(id: number): Observable<UsuarioEstudante> {
    return this.http.get<UsuarioEstudante>(`https://redezenite.herokuapp.com/usuario/${id}`)
  }

  logado() {
    let ok: boolean  = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

}
