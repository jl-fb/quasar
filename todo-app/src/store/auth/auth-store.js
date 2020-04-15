import { firebaseAuth } from "src/boot/firebase";
import { LocalStorage, Loading } from "quasar";
import { showErrorMessage } from "src/functions/function-show-error-message";

const state = {
	loggedIn: false
}
const mutations = {
	setLoggedIn(state, payload) {
		state.loggedIn = payload
	}
}
const actions = {
	registerUser({ }, payload) {
		Loading.show()
		firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(resp => {
				console.log("registerUser  action", resp);
			}).catch(err => {
				showErrorMessage(err.message)
			})
	},
	loginUser({ }, payload) {
		Loading.show()
		firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
			.then(resp => {
				console.log("loginUser  action", resp);
			}).catch(e => {
				showErrorMessage(e.message)
			})
	},
	logoutUser() {
		console.log("logoutUser action");
		firebaseAuth.signOut();
	},
	handleAuthStateChange({ commit, dispatch }) {

		console.log("handleAuthStateChange action");
		firebaseAuth.onAuthStateChanged((user) => {
			if (user) {
				commit('setLoggedIn', true)
				LocalStorage.set('loggedIn', true)
				this.$router.push('/').catch(err => { })
				dispatch('tasks/fbReadData', null, { root: true })
				//dispatch('fbReadData')

			} else {
				commit('tasks/clearTask', null, { root: true })
				commit('tasks/setTasksDownloaded', false, { root: true })
				commit('setLoggedIn', false)
				LocalStorage.set('loggedIn', false)

				this.$router.replace('/auth').catch(err => { })

			}
			Loading.hide()
		})
	}
}
const getters = {

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}