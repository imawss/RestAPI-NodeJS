import { initializeApp } from 'firebase-admin/app';
import { getAuth, onAuthStateChanged } from 'firebase-admin/auth';
import { getDocs, getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';

dotenv.config();

const firebaseApp = initializeApp({
    apiKey:process.env.API_KEY,
    authDomain:"nodejsrestapi-fb162.firebaseapp.com",
    projectId:"nodejsrestapi-fb162",
    storageBucket:"nodejsrestapi-fb162.appspot.com",
    messagingSenderId:"762142195052",
    appId:"1:762142195052:web:72bd73e2b18a5b53918749",
    measurementId:"G-HYVDQEDYV6"
});

const auth = getAuth(firebaseApp);
const firebaseContext = getFirestore(firebaseApp);

onAuthStateChanged(auth,user => {
    if(user !== null){
        console.log('Logged in!');
    }else{
        console.log('You should give a user');
    }
});

export const createUser = function(req,res){
    const {password, username} = req.body;
    const data = {
        "password":password,
        "username":username
    }
}

export const deleteUser = function(req,res){
    
}

export const updateUser = function(req,res){
    
}

export const getUserById = function(req,res){
    
}

export const getAllUsers = function(req,res){

}

