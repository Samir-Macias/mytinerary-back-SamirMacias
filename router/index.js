import { Router } from "express";
import citiesRouter from './cities.js'
import iteneraryRouter from "./iteneraries.js";
import usersRouter from './users.js'
import auth from './auth.js'


const router = Router()

router.use('/cities', citiesRouter)
router.use('/itinerary',iteneraryRouter)
router.use('/users', usersRouter)
router.use('/auth', auth)




export default router