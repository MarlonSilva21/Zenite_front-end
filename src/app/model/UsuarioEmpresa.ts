import {Postagem} from "./Postagem";

export class UsuarioEmpresa{
  public id: number
  public nome: string
  public email: string
  public cnpj: number
  public foto: string
  public senha: string
  public postagem: Postagem[]
}

