import express from "express";
import { deleteEmploye, getEmploye, postEmploye, updateEmploye } from "../controllers/adminControllers.js";
const router = express.Router()

router.get('/', getEmploye)
router.post('/employe', postEmploye)
router.delete('/employe/:id', deleteEmploye)
router.put('/employe/:id', updateEmploye)
export default router
