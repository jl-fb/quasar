import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

let firebaseConfig = {
    apiKey: "AIzaSyDCwDQbp-TwG8MLobxTJbkOdwydqwk-47U",
    authDomain: "teste-tcc-33c9b.firebaseapp.com",
    databaseURL: "https://teste-tcc-33c9b.firebaseio.com",
    projectId: "teste-tcc-33c9b",
    storageBucket: "teste-tcc-33c9b.appspot.com",
    messagingSenderId: "950630393936",
    appId: "1:950630393936:web:5f9c9fd5be1465ee554955"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

let $auth = firebaseApp.auth()
let $database = firebaseApp.database()

export { $auth, $database };