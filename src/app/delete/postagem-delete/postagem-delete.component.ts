import { Component, OnInit } from '@angular/core';
import {Postagem} from "../../model/Postagem";
import {environment} from "../../../environments/environment.prod";
import {TemaService} from "../../service/tema.service";
import {PostagemService} from "../../service/postagem.service";
import {ActivatedRoute, Router} from "@angular/router";
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  idUsuario = environment.id
  postagem: Postagem = new Postagem()
  idPost: number

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
      this.router.navigate(['/homeLogado'])

    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)

  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  apagar() {
    this.postagemService.deletePostagem(this.idPost).subscribe(() =>{
      this.alertas.showAlertSuccess('Postagem apagada com sucesso')
      this.router.navigate(['/perfil-usuario/', this.idUsuario])
    })
  }

}
