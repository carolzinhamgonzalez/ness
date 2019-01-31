import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private db: AngularFireDatabase) { }

  // CRUD 
  insert(contato: Contato){
    // acessa o nó 'contato' e dá um push no contato que foi inserido. 
    this.db.list('contato').push(contato)
      .then((result: any) => {
        console.log(result.key);
      });  
  }

  update(contato: Contato, key: string){
    // acessa o nó 'contato' e faz a atualização do mesmo. Retorna error se a operação não for bem sucedida.
    this.db.list('contato').update(key, contato)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll(){ 
    return this.db.list('contato')
      // pega as mudanças e mapei-as
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
   }

  delete(key: string){
    // deleta o contato accessano a key
    this.db.object(`contato/${key}`).remove();
  }
  
}
