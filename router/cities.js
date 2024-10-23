import { Router } from "express";
import { allCities, cityFilter, idCities } from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js";



const router = Router()

router.get('/all', allCities)
router.get('/id/:id', idCities)
router.get('/filter', cityFilter)
router.post('/create', create)

export default router