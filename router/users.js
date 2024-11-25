import { Router } from "express";
import register from "../controllers/users/register.js"
import {deleteAllUser, deleteUser} from "../controllers/users/delete.js"
import {allUsers, idUser,userValidate} from "../controllers/users/read.js"
import {updateManyUsers, updateUser} from "../controllers/users/update.js"
import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import schemaUsersCreated from "../schemas/users/create.js"
import createHash from "../middlewares/hashPasswords.js"
import passport from "../middlewares/passport.js";
import updateUserSchema from "../schemas/users/update.js";



const router = Router()

router.post('/register',validator(schemaUsersCreated),accountExists,createHash,register)
router.delete('/delete',passport.authenticate('jwt',{session:false}), deleteUser)
router.delete('/deleteall',passport.authenticate('jwt',{session:false}), deleteAllUser)
router.get('/all',passport.authenticate('jwt',{session:false}), allUsers)
router.get('/id/:id',passport.authenticate('jwt',{session:false}), idUser)
router.put('/update',passport.authenticate('jwt',{session:false}),validator(updateUserSchema), createHash, updateUser)
router.put('/updateall',passport.authenticate('jwt',{session:false}), updateManyUsers)
router.get('/validateToken', passport.authenticate('jwt', { session: false }), userValidate)

export default router