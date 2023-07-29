import express from "express";
import { deleteContrat, deleteEmploye, getContrat, getEmploye, postContrat, postEmploye, updateContrat, updateEmploye, viewsContrat, viewsEmploye } from "../controllers/adminControllers.js";
const router = express.Router()

router.get('/', getEmploye)
router.get('/views/:id', viewsEmploye)
router.post('/employe', postEmploye)
router.delete('/employe/:id', deleteEmploye)
router.put('/employe/:id', updateEmploye)

router.get('/contrat', getContrat)
router.get('/contrat/views/:id', viewsContrat)
router.post('/contrat', postContrat)
router.delete('/contrat/:id', deleteContrat)
router.put('/contrat/:id', updateContrat)

export default router
