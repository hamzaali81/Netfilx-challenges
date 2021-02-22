
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBt_E7lHTR8WtneI36as-ALDkIz_rGRdpM",
    authDomain: "netfilx-challenge.firebaseapp.com",
    databaseURL: "https://netfilx-challenge-default-rtdb.firebaseio.com",
    projectId: "netfilx-challenge",
    storageBucket: "netfilx-challenge.appspot.com",
    messagingSenderId: "496571790825",
    appId: "1:496571790825:web:6d1b03aec77749efa40778",
    measurementId: "G-XSKQVQHSGY"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db,auth,storage,provider }