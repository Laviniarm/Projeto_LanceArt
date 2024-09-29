export class Usuario {
  public id?: string = '';
  public email: string = '';
  public nome: string = '';
  public senha: string;

  constructor(
    id?: string,
    usuario: Usuario = { nome: '', email: '', senha: '' }
  ) {
    this.id = id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.senha = usuario.senha;
  }
}
