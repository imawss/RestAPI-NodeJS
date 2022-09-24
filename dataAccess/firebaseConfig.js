import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, push, child, remove, get, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import {  getFirestore, collection, getDocs } from 'firebase/firestore';

const base = initializeApp({
    apiKey: "AIzaSyBVhXTYSqt3FbO5pFx1S0k8E4Wr9ZXAsPw",
    authDomain: "nodejsrestapi-fb162.firebaseapp.com",
    projectId: "nodejsrestapi-fb162",
    storageBucket: "nodejsrestapi-fb162.appspot.com",
    messagingSenderId: "762142195052",
    appId: "1:762142195052:web:72bd73e2b18a5b53918749",
    measurementId: "G-HYVDQEDYV6",
    databaseURL: "https://nodejsrestapi-fb162-default-rtdb.firebaseio.com/" 
});

export const database = getDatabase(base);
export const dbRef = ref(database);

//export const auth = getAuth(firebaseApp);
//export const firebaseContext = getFirestore(firebaseApp);
//export const Users = collection(firebaseContext,'Users');
