import express from "express";
import bodyParser from "body-parser";
import{getAllUsers, getUserById, createUser, deleteUser} from "../controllers/userController.js"

const userRoute = express.Router();

userRoute.get('/users',getAllUsers);
userRoute.get('/users/:id', getUserById);

userRoute.post('/users/create', createUser);
userRoute.delete('/users/delete/:id', deleteUser);
export default userRoute;