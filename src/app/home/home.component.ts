import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: string
  // assunto: string
  // msg: string

  constructor(private alertas: AlertasService
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  enviarEmail(){


    if(this.email.indexOf('.') === -1){
      this.alertas.showAlertInfo('Informe um email válido')

    }

    else if(this.email.indexOf('@') === -1){
      this.alertas.showAlertInfo('Informe um email válido')
    }

    else{
      this.alertas.showAlertSuccess('Email enviado com sucesso')
    }


  }
}
