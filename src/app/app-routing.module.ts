import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [

  {path: '', redirectTo: 'cadastro-estudante', pathMatch: 'full'},

  {path:'cadastro-estudante', component: CadastroComponent},
  {path:'cadastro-professor', component: CadastroProfessorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
