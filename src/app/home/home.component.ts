import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: string
  // assunto: string
  // msg: string

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  enviarEmail(){


    if(this.email.indexOf('.') === -1){
      alert('Informe um email válido')

    }

    else if(this.email.indexOf('@') === -1){
      alert('Informe um email válido')
    }

    else{
      alert('Email enviado com sucesso')
    }


  }
}
