import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Postagem} from "../model/Postagem";
import {UsuarioEstudante} from "../model/UsuarioEstudante";
import {PostagemService} from "../service/postagem.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  foto = environment.foto
  idUsuario: number

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]

  key = 'data'
  reverse = true

  usuario: UsuarioEstudante = new UsuarioEstudante()
  idUser = environment.id
  fotoUser = environment.foto
  nomeUser = environment.nome

  constructor(
    private authService: AuthService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/home'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)

    this.postagemService.refreshToken()

  }

  findByIdUser(id: number) {
    this.postagemService.getByIdUser(id).subscribe((resp: UsuarioEstudante) => {
      this.usuario = resp
    })
  }

}
