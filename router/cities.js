import { Router } from "express";
import {allCities} from "../controllers/cities/read.js";



const router = Router()

router.get('/all',allCities)

export default router