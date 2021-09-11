import {UsuarioProfessor} from "./UsuarioProfessor";

export class Curso{
  public id: number
  public titulo: string
  public foto: string
  public descricaoCurso: string
  public aulas : string[]

  public professor: UsuarioProfessor
}
