import { Router } from "express";
import { allCities, cityFilter, idCities } from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js";
import { updateCities, updateManyCities } from "../controllers/cities/update.js";
import { deleteCity, deleteAllCities } from "../controllers/cities/deleate.js";


const router = Router()

router.get('/all', allCities)
router.get('/id/:id', idCities)
router.get('/filter', cityFilter)
router.post('/create', create)
router.put('update', updateCities)
router.put('updateall', updateManyCities)
router.delete('delete', deleteCity)
router.delete('deleteall', deleteAllCities)

export default router