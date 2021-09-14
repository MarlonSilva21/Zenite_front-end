import { Component, OnInit } from '@angular/core';
import {Categoria} from "../model/Categoria";
import {TemaService} from "../service/tema.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment.prod";
import {CursoService} from "../service/curso.service";
import {Postagem} from "../model/Postagem";
import {Curso} from "../model/Curso";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso: Curso = new Curso()
  idCurso: number
  listaCategoria: Categoria[]
  listaCursos: Curso[]
  cursoTema: string


  constructor(
    private cursoService: CursoService,
    private temaService: TemaService,
    private router: Router,
    
  ) { }

  ngOnInit(){

    if(environment.token == '') {
      this.router.navigate(['/home'])
    }

    this.cursoService.refreshToken()
    this.getAllCategoria()
    this.getAllCursos()

  }


  getAllCategoria(){
    this.temaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  getAllCursos() {
    this.cursoService.getAllCursos().subscribe((resp: Curso[]) => {
      this.listaCursos = resp
    })
  }

  findByNomeCurso(){

    if (this.cursoTema == ''){
      this.getAllCursos()
    }
    else{
      this.cursoService.getByTituloCursos(this.cursoTema).subscribe((resp: Curso[]) => {
        this.listaCursos = resp
      })
    }
  }

  findByIdCursos() {
    this.cursoService.getByIdCursos(this.idCurso).subscribe((resp: Curso) => {
      this.curso = resp
    })
  }
}
