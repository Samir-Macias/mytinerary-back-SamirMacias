import { Router } from "express";
import singIn from "../controllers/auth/signIn.js"
import accountNotExists from "../middlewares/accountNotExists.js";
import isValidadPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";



const routerAuth = Router()


routerAuth.post('/singin',accountNotExists, isValidadPassword, generateToken, singIn)

export default routerAuth