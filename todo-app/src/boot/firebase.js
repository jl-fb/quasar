/* import something here

"async" is optional
export default async ({ app, router, Vue, ... }) => {
  // something to do
}
 */

/////////////////////////////////

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth"
import "firebase/database"

let firebaseConfig = {
  apiKey: "AIzaSyBT0DIr2rVY79EMomUbkMxZ2ii8rtDmJXo",
  authDomain: "quasar-shoplist.firebaseapp.com",
  databaseURL: "https://quasar-shoplist.firebaseio.com",
  projectId: "quasar-shoplist",
  storageBucket: "quasar-shoplist.appspot.com",
  messagingSenderId: "951713843984",
  appId: "1:951713843984:web:88889149644f4103a03395"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb };


