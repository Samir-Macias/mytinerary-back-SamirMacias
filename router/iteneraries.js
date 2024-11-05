import { Router } from "express";
import { allIteneraries, idIteneraries, itineraryFilter} from "../controllers/iteneraries/read.js";
import {create } from "../controllers/iteneraries/create.js";
import {updateItenerary} from "../controllers/iteneraries/update.js";
import { deleteAllIteneary, deleteItenerary  } from "../controllers/iteneraries/deleate.js";


const router = Router()

router.get('/all', allIteneraries )
router.get('/filter', itineraryFilter)
router.get('/id/:id', idIteneraries)
router.post('/create', create)
router.put('/update', updateItenerary)
router.delete('/delete', deleteItenerary)
router.delete('/deleteall', deleteAllIteneary)

export default router