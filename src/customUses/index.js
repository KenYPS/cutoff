
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

export const apiAddData = ({ account, sendData, cutoffMonth }) => {
    return firebase.database().ref(`/cutoff/${account}/${cutoffMonth}`).push(sendData)

}

export const apiEditData = ({account, sendData,cutoffMonth,key,originCutoffDate })=>{
    firebase.database().ref(`/cutoff/${account}/${originCutoffDate}/${key}`).remove()
    return firebase.database().ref(`/cutoff/${account}/${cutoffMonth}/${key}`).update(sendData)
}

export const apiDeleteData = ({account, sendData,cutoffMonth,key })=>{
    return firebase.database().ref(`/cutoff/${account}/${cutoffMonth}/${key}`).remove()
}

export const apiGetData = ({ account, selectedMonth }) => {
    return defaultFetchFunc({
        api: firebase.database().ref(`/cutoff/${account}/${selectedMonth}`)
    })
    // return firebase.database().ref(`/cutoff/${account}/${selectedMonth}`)

}