import * as firebase from 'firebase'

import firebaseConfig from "./ApiKey"


export const firebaseApp = firebase.initializeApp(firebaseConfig)



// login
export const apiLogin = (account, password) => {
    return firebaseApp.auth().signInWithEmailAndPassword(account, password)
}

export const apiTokenVerify = (token) => {
    return firebase.auth().currentUser
}