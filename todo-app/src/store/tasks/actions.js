import { uid, Notify } from 'quasar'
import { firebaseDb, firebaseAuth } from "src/boot/firebase";
import { showErrorMessage } from 'src/functions/function-show-error-message';

//NOTE utilizando um método q usa uma ação para disparar outra que atualiza o DB - atualizando o state e view 'automaticamente'
export function updateTask({ dispatch }, payload) {
  console.log("updateTask action");

  dispatch("tasks/fbUpdateTask", payload, { root: true });
}
/* NOTE Função utilizada apenas para disparar a mutation que atualizada um elemento no state do APP

export function updateTask({ commit }, payload) {
  console.log("updateTask action");

  commit("tasks/updateTask", payload, { root: true });
}
*/

export function deleteTask({ }, id) {
  console.log("deleteTask action");
  console.log(id);

  let userID = firebaseAuth.currentUser.uid
  firebaseDb.ref(`tasks/${userID}/${id}`).remove(err => {
    if (err) {
      showErrorMessage(err.message)
    } else {
      Notify.create("Item deletado")
    }
  })
}

export function addTask({ }, task) {
  console.log("addTask action");
  let taskuid = uid();
  let userId = firebaseAuth.currentUser.uid;
  console.log("aquiiii", task)
  firebaseDb.ref(`tasks/${userId}/${taskuid}`)
    .set(task, err => {
      if (err) {
        showErrorMessage(err.message)
      } else {
        Notify.create("Item adicionado")
      }
    })
}
/* NOTE codigo abaixo era utilizado para autalizar o state sem o DB, 
  agora com  firebase podemos apenas inserir o dado nele o a fbReadData ira atualizar
  o state quando verificar alguma mudança no nó 'tasks'
let payload = {
  id: taskuid,
  task: task
}
commit('tasks/addTask', payload, { root: true }) */

export function setSearch({ commit }, payload) {
  console.log("setSearch action", payload);

  commit('tasks/setSearch', payload, { root: true })
}
export function setSort({ commit }, payload) {
  console.log("setSort action", payload);

  commit('tasks/setSort', payload, { root: true })
}

//NOTE as ações de fbReadData captem mudanças do DB e reproduzem no APP
export function fbReadData({ commit }, ) {
  let userID = firebaseAuth.currentUser.uid
  let userTasks = firebaseDb.ref(`tasks/${userID}`)

  //NOTE checando dados ao abrir a pagina para apresentar lista quando estiver pronta
  userTasks.once('value', snapshot => {
    commit('setTasksDownloaded', true)
  }, err => {
    if (err) {
      showErrorMessage(err.message)
      this.$router.replace('/auth')
    }
  })

  /* NOTE child_add acionada toda vez que um dado é coocado no DB 
    ou quando o DB é conectado (login) pq está conectado ao  handleAuthStateChange 
    do auth-store*/

  userTasks.on('child_added', snapshot => {
    let payload = {
      id: snapshot.key,
      task: snapshot.val()
    }
    commit('tasks/addTask', payload, { root: true })
  });

  //NOTE child_change acionada toda vez q um dado muda (atualiza a viu)
  userTasks.on('child_changed', snapshot => {
    let payload = {
      id: snapshot.key,
      updates: snapshot.val()
    }
    commit('tasks/updateTask', payload, { root: true })
  })

  //NOTE child_change acionada toda vez q um dado muda (atualiza a viu)
  userTasks.on('child_removed', snapshot => {
    commit('tasks/deleteTask', snapshot.key, { root: true })
  });
}

//NOTE Exemplo de como seria ter 1 função para alterar o state do app e outra para alterar o DB
export function fbUpdateTask({ }, payload) {
  let userID = firebaseAuth.currentUser.uid
  let userTasks = firebaseDb.ref(`tasks/${userID}/${payload.id}`)
  userTasks.update(payload.updates, err => {
    if (err) {
      showErrorMessage(err.message)
    } else {
      let k = Object.keys(payload.updates)
      console.log(k);

      if (k.includes('completed') && k.length == 1) {
        return
      } else {
        Notify.create('Item alterado')
      }
    }
  })
}