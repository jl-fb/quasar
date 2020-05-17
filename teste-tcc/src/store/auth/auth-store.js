import { Loading, LocalStorage } from "quasar";
import { $auth, $database } from 'src/boot/firebase'
import { showErrorMessage } from "src/functions/show-error-messages";
const LOG = "color:white;background: blue; padding:8px"
const state = {
	loggedIn: false,
}

/**             MUTATIONS              **/
const mutations = {
	setLoggedIn(state, payload) {
		state.loggedIn = payload
	}
}


/**             ACTIONS              **/
const actions = {
	onAuthStateChange({ commit, dispatch }) {
		console.log('%c AUTH CHANGE', LOG)
		$auth.onAuthStateChanged((user) => {
			if (user) {
				commit('setLoggedIn', true)
				LocalStorage.set('@loggedIn', true)
				console.log('SETLOGIN');
				dispatch('user/fbReadData', null, { root: true })
				this.$router.push('/').catch(() => { })
			} else {
				console.log('SETLOGOUT');
				commit('setLoggedIn', false)
				LocalStorage.clear()
				this.$router.replace('/auth').catch(() => { })
			}
			Loading.hide()
		})
	},

	loginUser({ }, payload) {
		Loading.show()
		$auth.signInWithEmailAndPassword(payload.email, payload.password)
			.then(resp => {
				console.log("Logged", resp);
			}).catch(e => showErrorMessage(e.message))
	},
	registerUser({ }, payload) {
		Loading.show()
		$auth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(() => {
				console.log("Registrado");
			}).catch(e => showErrorMessage(e.message)
			)
	},

	logoutUser({ }) {
		Loading.show()
		console.log("Logou action");
		$auth.signOut()
		Loading.hide()
	}

}



export default {
	namespaced: true,
	state,
	actions,
	mutations,
}