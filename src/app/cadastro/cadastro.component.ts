import { Component, OnInit } from '@angular/core';
import {UsuarioEstudante} from "../model/UsuarioEstudante";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioEstudante: UsuarioEstudante = new UsuarioEstudante()
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastrar() {

    if(this.usuarioEstudante.senha != this.confirmarSenha){
      alert('as senhas estão incorretas')
    }
    else if(this.usuarioEstudante.senha.length < 6){
      alert('Dígite uma senha com no mínimo 6 caracteres!')
    }
    else{
      this.authService.cadastrar(this.usuarioEstudante).subscribe((resp: UsuarioEstudante) => {
        this.usuarioEstudante = resp

        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso, Conecte-se')
      } )
    }
  }
}
