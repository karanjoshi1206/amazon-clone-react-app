import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOyyKgEnsB_ppOJcBcGrFOa6QhjVsFANY",
    authDomain: "clone-523f4.firebaseapp.com",
    projectId: "clone-523f4",
    storageBucket: "clone-523f4.appspot.com",
    messagingSenderId: "151870552157",
    appId: "1:151870552157:web:3a8b59972a9e17347775b4",
    measurementId: "G-PYJMJ9QGYP"
})
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };