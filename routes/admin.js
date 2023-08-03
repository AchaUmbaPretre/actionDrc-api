import express from "express";
import { deleteAffectation, deleteClient, deleteContrat, deleteEmploye, getAffectation, getAllAffectation, getClient, getContrat, getEmploye, getFonction, postAffectation, postClient, postContrat, postEmploye, updateContrat, updateEmploye, viewsClient, viewsContrat, viewsEmploye } from "../controllers/adminControllers.js";
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


router.get('/client', getClient)
router.get('/viewsClient/:id', viewsClient)
router.post('/clientPost', postClient)
router.delete('/client/:id', deleteClient)
router.put('/client/:id', updateContrat)


router.get('/fonction', getFonction)
router.post('/affectations', postAffectation)
router.get('/affectation', getAffectation)
router.get('/allaffectation', getAllAffectation)
router.delete('/deleteAff', deleteAffectation)
export default router
