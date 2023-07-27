import express from "express";
import { getEmploye, postEmploye } from "../controllers/adminControllers.js";
const router = express.Router()

router.get('/', getEmploye)
router.post('/employe', postEmploye)

export default router