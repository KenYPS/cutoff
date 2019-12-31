import * as firebase from 'firebase'

import firebaseConfig from "./ApiKey"


export const firebaseApp = firebase.initializeApp(firebaseConfig)



const defaultFetchFunc = ({api}) =>{
let isLoading = false
const fetchApi=()=>{
    isLoading =true
    api.then(()=>{
        isLoading =false
    })
}

return {
    isLoading,
    fetchApi
}
}



// login
export const apiLogin = (account, password) => {
    return firebaseApp.auth().signInWithEmailAndPassword(account, password)
}

export const apiTokenVerify = () => {
    return firebase.auth().currentUser
}

export const apiSendData = ({account,sendData,cutoffMonth})=>{
    return firebase.database().ref(`/cutoff/${account}/${cutoffMonth}`).push(sendData)
    
}

export const apiGetData = ({account,selectedMonth})=>{
    return firebase.database().ref(`/cutoff/${account}/${selectedMonth}`)
    
}