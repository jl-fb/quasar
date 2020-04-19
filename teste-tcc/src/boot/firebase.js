import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDCwDQbp-TwG8MLobxTJbkOdwydqwk-47U",
    authDomain: "teste-tcc-33c9b.firebaseapp.com",
    databaseURL: "https://teste-tcc-33c9b.firebaseio.com",
    projectId: "teste-tcc-33c9b",
    storageBucket: "teste-tcc-33c9b.appspot.com",
    messagingSenderId: "950630393936",
    appId: "1:950630393936:web:5f9c9fd5be1465ee554955"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const $auth = firebaseApp.auth()
const $database = firebaseApp.database()
const $fireStore = firebaseApp.firestore()

export { $auth, $database, $fireStore };