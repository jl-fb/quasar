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

export function showConfirmDialog(msg, data, title = "Alert") {
    // let msg = {
    //     401: 'Usuário não cadastrado'
    // }
    // if (erro.code == 'auth/user-not-found') {
    //     Dialog.create({ title: 'Error', message: msg[401] })
    // }
    Dialog.create({ title: title, message: msg, })
        .onOk(() => {
            console.log("AQII", data.length);
            data.splice(3)
        })
    Loading.hide()
}