import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {  getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBVhXTYSqt3FbO5pFx1S0k8E4Wr9ZXAsPw",
    authDomain: "nodejsrestapi-fb162.firebaseapp.com",
    projectId: "nodejsrestapi-fb162",
    storageBucket: "nodejsrestapi-fb162.appspot.com",
    messagingSenderId: "762142195052",
    appId: "1:762142195052:web:72bd73e2b18a5b53918749",
    measurementId: "G-HYVDQEDYV6"
});

export const auth = getAuth(firebaseApp);
export const firebaseContext = getFirestore(firebaseApp);
export const Users = collection(firebaseContext,'Users');
