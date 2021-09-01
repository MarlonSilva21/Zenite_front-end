import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLogadoComponent } from './home-logado/home-logado.component';

const routes: Routes = [

  {path: 'homeLogado', component: HomeLogadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
