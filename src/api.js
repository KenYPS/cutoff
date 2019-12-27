import * as firebase from 'firebase'

import firebaseConfig from "./ApiKey"


const firebaseApp = firebase.initializeApp(firebaseConfig)

let db 


// login
export const apiLogin = (account,password) => {
   return firebaseApp.auth().signInWithEmailAndPassword(account, password)
  
}

export const getCutoffList = ()=>{

}