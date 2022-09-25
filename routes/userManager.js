import express from "express";
import bodyParser from "body-parser";
import{getAllUsers, getUserById, createUser, deleteUser, getLoginDatas} from "../controllers/userController.js"

const userRoute = express.Router();

userRoute.get('/users',getAllUsers);
userRoute.get('/users/:id', getUserById);

userRoute.post('/users/create', createUser);
userRoute.post('users/login', getLoginDatas);
userRoute.delete('/users/delete/:id', deleteUser);
export default userRoute;