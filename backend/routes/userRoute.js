import express from 'express';
export { loginUser,registerUser,adminLogin } from '../controllers/userController.js';

const userRouter= express.Router()

userRouter.post('/register',registrUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;