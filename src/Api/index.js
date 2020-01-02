
import * as firebase from 'firebase'
import firebaseConfig from "./ApiKey"
import defaultFetchFunc from "./useFetchData"


export const firebaseApp = firebase.initializeApp(firebaseConfig)


// login
export const apiLogin = (account, password) => {
    return firebaseApp.auth().signInWithEmailAndPassword(account, password)
}

export const apiTokenVerify = () => {
    return firebase.auth().currentUser
}

export const apiSendData = ({ account, sendData, cutoffMonth }) => {
    return firebase.database().ref(`/cutoff/${account}/${cutoffMonth}`).push(sendData)

}

export const apiGetData = ({ account, selectedMonth }) => {
    return defaultFetchFunc({
        api: firebase.database().ref(`/cutoff/${account}/${selectedMonth}`)
    })
    // return firebase.database().ref(`/cutoff/${account}/${selectedMonth}`)

}