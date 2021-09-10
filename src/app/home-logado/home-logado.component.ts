import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {TemaService} from "../service/tema.service";
import {Observable} from "rxjs";
import {Categoria} from "../model/Categoria";
import {Router} from "@angular/router";
import {Postagem} from "../model/Postagem";
import {UsuarioEstudante} from "../model/UsuarioEstudante";
import {PostagemService} from "../service/postagem.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.component.html',
  styleUrls: ['./home-logado.component.css']
})
export class HomeLogadoComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id

  usuario: UsuarioEstudante = new UsuarioEstudante()


  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  postagemTema: string
  tituloPost: string

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  key = 'data'
  reverse = true

  constructor(
    private auth:AuthService,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit(){

    if(environment.token == '') {
      this.router.navigate(['/home'])
    }

    this.getAllCategoria()
    this.getAllPostagens()
    this.temaService.refreshToken()
    this.postagemService.refreshToken()
  }


  getAllCategoria(){
    this.temaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  findByIdCategoria() {
    this.temaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  findByPostagemTema(){
    if(this.postagemTema == ''){
      this.getAllCategoria()
    }
    else{
      this.temaService.getByNomeCategoria(this.postagemTema).subscribe((resp: Categoria[]) => {
        this.listaCategoria = resp
      })
    }
  }

  findByIdUser() {
    this.auth.getByIdUser(this.id).subscribe((resp: UsuarioEstudante) => {
      this.usuario = resp
    })
  }


  publicar() {
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    this.usuario.id = this.id
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}
