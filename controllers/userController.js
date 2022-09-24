import {dbRef,database} from '../dataAccess/firebaseConfig.js';
import { ref, set, push, child, remove, get, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import { getDocs } from 'firebase/firestore';

export const createUser =  async function(req,res){
    const {password, username} = req.body;
    const data = {
        "password":password,
        "username":username
    }
  
    const userId = push(ref(database, "Users"));
    set(userId, data);
    res.send("A user added");
}

export const deleteUser = function(req,res){
    
}

export const updateUser = function(req,res){
    
}

export const getUserById = function(req,res){
    
}

export const getAllUsers = async function(req,res){
    const userList = await getDocs(Users);
    res.send(userList);
}

