import { Router } from "express";
import { } from "../controllers/iteneraries/read.js";
import {create } from "../controllers/iteneraries/create.js";
import {} from "../controllers/iteneraries/update.js";
import {  } from "../controllers/iteneraries/deleate.js";


const router = Router()

router.get('/all', )
router.get('/filter', cityFilter)
router.get('/id/:id', idCities)
router.post('/create', create)
router.put('/update', updateCities)
router.put('/updateall', updateManyCities)
router.delete('/delete', deleteCity)
router.delete('/deleteall', deleteAllCities)

export default router