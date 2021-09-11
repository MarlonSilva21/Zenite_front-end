import {Postagem} from "./Postagem";
import {Curso} from "./Curso";

export class UsuarioProfessor{
  public id: number
  public nome: string
  public email: string
  public foto: string
  public senha: string
  public postagem: Postagem[]
  public cursos: Curso[]
}
