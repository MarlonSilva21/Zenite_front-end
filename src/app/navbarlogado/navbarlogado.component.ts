import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-navbarlogado',
  templateUrl: './navbarlogado.component.html',
  styleUrls: ['./navbarlogado.component.css']
})
export class NavbarlogadoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == '') {
      this.router.navigate(['/home'])
    }
    
  }

  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}
