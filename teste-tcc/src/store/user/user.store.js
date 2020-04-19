import  Vue  from "vue";
import { uid } from "quasar";
import { $auth, $database , $fireStore} from "src/boot/firebase";
import { showErrorMessage } from "src/functions/show-error-messages";

const LOG = "color:white;background: blue; padding:8px"
const REF = (userID, idPol) => {
   return $fireStore.doc(`usuarios/${userID}/politicos/${idPol}`)
}
const state = {
  politicos: {},
  ready: false,
  setPoliticos: false
}

/**             MUTATIONS              **/
const mutations = {
  SET_POLITICOS(state, payload) {
    Vue.set(state.politicos, payload.id, payload.politicos)
  },
  READY_DATA(state, payload) {
    state.ready = payload
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
    docRef.set(payload.politicos, err =>{
      if(err){
        showErrorMessage(err.message)
      }
    })
   
    commit('SET_POLITICOS', payload)
    });
  }

}
const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}