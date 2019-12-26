import * as firebase from 'firebase'

import firebaseConfig from "./ApiKey"


const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.auth()
const db = firebaseApp.database()
// login
export const loginApi = (account,password) => {
    console.log(456);
    
    // db.ref(`/account/mikohsu`).once('value',snapshot=>{
    // const data = snapshot.val();
    // }).then(function () {
    //     alert("建立成功");
    // }).catch(function () {
    //     alert("伺服器發生錯誤，請稍後再試");
    // })

    db.ref("/cutoff/mikohsu").update([{
        time:'12/25',
        item:'資金',
        cash:2000,
        nonCash:200


    }])
    .then(function () {
        alert("建立成功");
    }).catch(function () {
        alert("伺服器發生錯誤，請稍後再試");
    });
}

export const getCutoffList = ()=>{

}