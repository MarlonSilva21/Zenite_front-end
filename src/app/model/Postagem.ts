import {UsuarioEstudante} from "./UsuarioEstudante";
import {Categoria} from "./Categoria";

export class Postagem{
  public id: number
  public titulo: string
  public subtitulo: string
  public texto: string
  public data: Date

  public usuario: UsuarioEstudante
  public categoria: Categoria
}
