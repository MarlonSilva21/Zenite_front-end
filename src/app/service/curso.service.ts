import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {Postagem} from "../model/Postagem";
import {Curso} from "../model/Curso";

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllCursos(): Observable<Curso[]> {
    return  this.http.get<Curso[]>('https://redezenite.herokuapp.com/cursos', this.token)
  }

  getByIdCursos(id: number): Observable<Curso> {
    return  this.http.get<Curso>(`https://redezenite.herokuapp.com/cursos/${id}`, this.token)
  }

  getByTituloCursos(titulo: String): Observable<Curso[]> {
    return  this.http.get<Curso[]>(`https://redezenite.herokuapp.com/cursos/titulo/${titulo}`, this.token)
  }

 postCursos(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>('https://redezenite.herokuapp.com/cursos', curso ,this.token)
 }

 putCursos(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>('https://redezenite.herokuapp.com/cursos', curso, this.token)
 }

 deleteCurso(id: number) {
    return this.http.delete(`https://redezenite.herokuapp.com/cursos/${id}`, this.token)
 }
}
