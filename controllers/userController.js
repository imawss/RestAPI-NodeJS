import {firebaseContext,Users} from '../dataAccess/firebaseConfig.js';

export const createUser =  async function(req,res){
    const {password, username} = req.body;
    const data = {
        "password":password,
        "username":username
    }
  
    await Users.add(data);
    res.send("A user added");

}

export const deleteUser = function(req,res){
    
}

export const updateUser = function(req,res){
    
}

export const getUserById = function(req,res){
    
}

export const getAllUsers = async function(req,res){
    const userList = await Users.get();
    res.send(userList);
}

