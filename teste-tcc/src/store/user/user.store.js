import Vue from "vue";
import { uid, LocalStorage, Loading } from "quasar";
import { $auth, $database, $fireStore } from "src/boot/firebase";
import { showErrorMessage } from "src/functions/show-error-messages";

const LOG = "color:white;background: blue; padding:8px"
const REF = (userID, idPol = "") => {
  if (idPol === "") {
    return $fireStore.collection(`usuarios/${userID}/politicos`)
  } else {
    return $fireStore.doc(`usuarios/${userID}/politicos/${idPol}`)
  }
}
const state = {
  politicos: {},
  ready: false,
  setPoliticos: false
}

/**             MUTATIONS              **/
const mutations = {
  SET_POLITICOS(state, payload) {
    Vue.set(state.politicos, payload.id, payload.data())
  },

  SET_READY(state, payload) {
    state.ready = payload
  },
  READY_DATA(state, payload) {
    state.ready = payload
  },
  DELETE_POLITICO(state, payload) {
    Vue.delete(state.politicos, payload)
  }
}


/**             ACTIONS              **/
const actions = {
  setSelectedPolitcos({ commit }, politicos) {
    console.log("%c setSelectedPolitcos ACTION", LOG, politicos);
    let userID = $auth.currentUser.uid
    console.log(userID)

    politicos.forEach(element => {
      console.log(userID)
      console.log(element.id)
      let payload = {
        id: element.id,
        politicos: {
          uri: element.uri,
          nome: element.name,
          siglaPartido: element.siglaPartido,
          uriPartido: element.uriPartido,
          siglaUf: element.siglaUf,
          idLegislatura: element.idLegislatura,
          urlFoto: element.urlFoto,
          email: element.email
        }
      }
      let docRef = REF(userID, payload.id)
      docRef.set(payload.politicos).then(
        console.log("Políticos cadastrados")
      ).catch(e => { showErrorMessage(e.message) })
    })
  },

  fbReadData({ commit }) {
    let userID = $auth.currentUser.uid
    let colRef = REF(userID)
    colRef.get().then(snapshot => {
      if (snapshot.size > 0) {
        commit('SET_READY', true)
      } else {
        LocalStorage.clear()
        this.$router.replace('/auth')
      }
    })
    colRef.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          commit('SET_POLITICOS', change.doc)
        }
        if (change.type === 'removed') {
          commit('DELETE_POLITICO', change.doc.id)
        }
      })
      //   snap.forEach(el =>{      
      //     console.log("EL",el);

      // //   let payload = {
      // //   id: el.id,
      // //   politicos: {
      // //     uri: el.data().uri,
      // //     nome: el.data().name,
      // //     siglaPartido: el.data().siglaPartido,
      // //     uriPartido: el.data().uriPartido,
      // //     siglaUf: el.data().siglaUf,
      // //     idLegislatura: el.data().idLegislatura,
      // //     urlFoto: el.data().urlFoto,
      // //     email: el.data().email
      // //   }
      // // }
      //   commit('SET_POLITICOS', el)
      //   })
    })

  }
}
const getters = {
  getPoliticosId(state) {
    return state.politicos.id
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}