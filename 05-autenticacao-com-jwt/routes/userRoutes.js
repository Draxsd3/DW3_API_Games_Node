import express from 'express'; 
const userRoutes = express.Router();
import { createUser, getUser } from '../controllers/userController.js';


userRoutes.post('/user', userController.createUser);

export default userRoutes;