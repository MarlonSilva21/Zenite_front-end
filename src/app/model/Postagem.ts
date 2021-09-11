import {UsuarioEstudante} from "./UsuarioEstudante";
import {Categoria} from "./Categoria";
import {UsuarioProfessor} from "./UsuarioProfessor";

export class Postagem{
  public id: number
  public titulo: string
  public foto: string
  public texto: string
  public data: Date

  public usuario: UsuarioEstudante
  public professor: UsuarioProfessor
  public categoria: Categoria
}
