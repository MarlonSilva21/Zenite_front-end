import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
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
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/home'])
    }

    this.findByIdUser()
    this.postagemService.refreshToken()

  }

  // getPostagemById() {
  //   this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
  //     this.listaPostagem = resp
  //   })
  // }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: UsuarioEstudante) => {
      this.usuario = resp
    })
  }

}
