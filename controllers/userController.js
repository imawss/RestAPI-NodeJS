import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
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
const users = collection(firebaseContext, 'Users');

onAuthStateChanged(auth,user => {
    if(user !== null){
        console.log('Logged in!');
    }else{
        console.log('You should give a user');
    }
});

export const createUser = function(req,res){
    const {password, username} = req.body;
    console.log("Username is:" + username);
    console.log("Password is:" + password);
    console.log(process.env.API_KEY);
}

export const deleteUser = function(req,res){
    
}

export const updateUser = function(req,res){
    
}

export const getUserById = function(req,res){
    
}

export const getAllUsers = function(req,res){

}

