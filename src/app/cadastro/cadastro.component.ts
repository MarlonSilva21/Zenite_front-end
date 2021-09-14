import { Component, OnInit } from '@angular/core';
import { UsuarioEstudante } from "../model/UsuarioEstudante";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";
import { AlertasService } from '../service/alertas.service';

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
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastrar() {
    if (this.usuarioEstudante.email.indexOf('.') === -1) {
      this.alertas.showAlertDanger('Informe um email válido')

    }

    else if (this.usuarioEstudante.email.indexOf('@') === -1) {
      this.alertas.showAlertDanger('Informe um email válido')
    }

    else if (this.usuarioEstudante.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('as senhas estão incorretas')
    }
    else if (this.usuarioEstudante.senha.length < 6) {
      this.alertas.showAlertInfo('Dígite uma senha com no mínimo 6 caracteres!')
    }
    else {
      this.authService.cadastrar(this.usuarioEstudante).subscribe((resp: UsuarioEstudante) => {
        this.usuarioEstudante = resp

        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso, Conecte-se')
      })
    }
  }
}
