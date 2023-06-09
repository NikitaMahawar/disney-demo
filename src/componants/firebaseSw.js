// import firebase from 'firebase/app'; 
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// import firebase from 'firebase'; 
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBG8Sc8zyQmIviZT38QZ1kiPDTMYmXAz8E",
    authDomain: "disneyplusclone-6e795.firebaseapp.com",
    projectId: "disneyplusclone-6e795",
    storageBucket: "disneyplusclone-6e795.appspot.com",
    messagingSenderId: "536479637423",
    appId: "1:536479637423:web:8e92c6edb608086482595a",
    measurementId: "G-GW0G5MKJJB",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseDb = firebaseApp.firestore();
// const firebaseAuth = firebase.auth();
// const firebaseProvider = new firebase.auth.GoogleAuthProvider();
// const firebaseStorage = firebase.storage();

const firebaseApp = initializeApp(firebaseConfig, "disney-test");
const firebaseDb = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
const firebaseProvider = new GoogleAuthProvider(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);

export {firebaseApp, firebaseAuth, firebaseProvider, firebaseStorage};
export default firebaseDb;