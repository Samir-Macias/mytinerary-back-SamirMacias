import { Router } from "express";
import singIn from "../controllers/auth/signIn.js"
import singOut from "../controllers/auth/signout.js"
import singUp from "../controllers/auth/signup.js"
import singInGoogle from "../controllers/auth/signInGoogle.js"


import accountNotExists from "../middlewares/accountNotExists.js";
import isValidadPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import accountExists from "../middlewares/accountExists.js";


const routerAuth = Router()


routerAuth.post('/singin',accountNotExists, isValidadPassword, generateToken, singIn)
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), singOut)
routerAuth.post('/signUp', accountExists, singUp);

routerAuth.get(                                                                           
    '/signIn/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] }) 
)


routerAuth.get(                                                 
    '/signIn/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    singInGoogle
)

export default routerAuth