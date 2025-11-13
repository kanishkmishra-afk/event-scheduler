import express from 'express'
import { getCurrentUser, login, registerUser } from '../controllers/userController.js'
import isAuth from '../middlewares/isAuth.js'

const userRoute=express.Router()

userRoute.post("/registerUser",registerUser)
userRoute.post("/login",login)
userRoute.get("/getCurrentUser",isAuth,getCurrentUser)

export default userRoute