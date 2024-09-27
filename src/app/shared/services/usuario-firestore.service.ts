import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {from, map, Observable} from "rxjs";
import {Usuario} from "../models/Usuario";


@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {
  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';


  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }


  listar(): Observable<Usuario[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoUsuarios.valueChanges({idField: 'id'});
  }


  inserir(usuario: Usuario): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    delete usuario.id;
    // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoUsuarios.add(Object.assign({}, usuario)));
  }

  pesquisarPorEmailSenha(email: string, senha: string): Observable<Usuario | null> {
    return this.afs.collection<Usuario>(this.NOME_COLECAO, ref =>
      ref.where('email', '==', email).where('senha', '==', senha))
      .valueChanges({ idField: 'id' })
      .pipe(
        map(usuarios => usuarios.length > 0 ? usuarios[0] : null)  // Retorna o primeiro usuário encontrado, ou null se não houver
      );
  }


  apagar(id: string): Observable<void> {
    return from(this.colecaoUsuarios.doc(id).delete());
  }


  pesquisarPorId(id: string): Observable<Usuario> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
    return this.colecaoUsuarios.doc(id).get().pipe(map(document => new Usuario(document.id, document.data())));
  }


  atualizar(usuario: Usuario): Observable<void> {
    const id = usuario.id;
// removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    delete usuario.id;
    return from(this.colecaoUsuarios.doc(id).update(Object.assign({}, usuario)));


  }

}
