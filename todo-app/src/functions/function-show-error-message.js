import { Dialog, Loading } from 'quasar'

export function showErrorMessage(erro) {
    // let msg = {
    //     401: 'Usuário não cadastrado'
    // }
    // if (erro.code == 'auth/user-not-found') {
    //     Dialog.create({ title: 'Error', message: msg[401] })
    // }
    Dialog.create({ title: 'Error', message: erro })
    Loading.hide()
}