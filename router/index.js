import { Router } from "express";
import citiesRouter from './cities.js'
import iteneraryRouter from "./iteneraries.js";

const router = Router()

router.use('/cities', citiesRouter)
router.use('/itenerary',iteneraryRouter)



export default router