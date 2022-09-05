import express from "express";
import bodyParser from "body-parser";
import{getAllUsers, getUserById, createUser, updateUser, deleteUser} from "../controllers/userController.js"

const userRoute = express.Router();

userRoute.get('/users',getAllUsers);
userRoute.get('/users:id', getUserById);

userRoute.post('/users', createUser);

export default userRoute;