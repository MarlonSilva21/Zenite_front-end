import { Component, OnInit } from '@angular/core';
import {Categoria} from "../model/Categoria";
import {TemaService} from "../service/tema.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listaCategoria: Categoria[]


  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit(){
    //
    // if(environment.token == '') {
    //   this.router.navigate(['/home'])
    // }

    this.getAllCategoria()

  }


  getAllCategoria(){
    this.temaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

}
