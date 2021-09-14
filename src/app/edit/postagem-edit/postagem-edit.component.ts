import { Component, OnInit } from '@angular/core';
import {Postagem} from "../../model/Postagem";
import {Categoria} from "../../model/Categoria";
import {environment} from "../../../environments/environment.prod";
import {TemaService} from "../../service/tema.service";
import {PostagemService} from "../../service/postagem.service";
import {ActivatedRoute, Router} from "@angular/router";
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()
  tema: Categoria = new Categoria()
  listaTemas: Categoria[]
  idTema: number

  idUsuario = environment.id

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      //alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/home'])
      this.findAllTemas()
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllTemas()
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdCategoria(this.idTema).subscribe((resp: Categoria) => {
      this.tema = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaTemas = resp
    })
  }

  atualizar() {
    this.tema.id = this.idTema
    this.postagem.categoria = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem atualizada com sucesso!')
      this.router.navigate(['/perfil-usuario/', this.idUsuario])
    })
  }

}
