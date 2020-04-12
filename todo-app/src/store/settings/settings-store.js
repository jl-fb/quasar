import { LocalStorage, SessionStorage } from 'quasar'

const state = {
    settings: {
        changeHourFormat: false,
        showTaksOneList: false,
    }
}
const mutations = {
    setHourFormat(state, payload) {
        state.settings.changeHourFormat = payload
    },
    setShowTaksOneList(state, payload) {
        state.settings.showTaksOneList = payload
    },
    setSettings(state, payload) {
        Object.assign(state.settings, payload)
    }
}
const actions = {
    /*  setHourFormat({ commit }, payload) {
         console.log('Action setHourFormat', payload);
         commit('setHourFormat', payload)
     } */
    setHourFormat: ({ commit, dispatch }, payload) => {
        commit('setHourFormat', payload)
        dispatch('saveSettings')
    },
    setShowTaksOneList: ({ commit, dispatch }, payload) => {
        commit('setShowTaksOneList', payload)
        dispatch('saveSettings')

    },
    saveSettings({ state }) {
        LocalStorage.set('settings', state.settings)
    },
    getSettings({ commit }) {
        let settings = LocalStorage.getItem('settings')
        if (settings) {
            commit('setSettings', settings)
        }
    }
}
const getters = {
    /* settings: function(state){
        return state.settings
    } */
    settings: state => { return state.settings }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}