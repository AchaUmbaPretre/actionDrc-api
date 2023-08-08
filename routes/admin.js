import express from "express";
import { deleteAffectation, deleteClient, deleteContrat, deleteEmploye, deleteHoraire, deleteMission, deletePresence, getAffectation, getAllAffectation, getAllHoraire, getAllMission, getAvantage, getClient, getContrat, getContratType, getDuration, getEmploye, getFonction, getHoraire, getMission, getMissionView, getPresence, getSalaireMission, getStatusContrat, postAffectation, postClient, postContrat, postEmploye, postHoraire, postMission, postPresence, putHoraires, updateContrat, updateEmploye, updatePresence, viewsClient, viewsContrat, viewsEmploye } from "../controllers/adminControllers.js";
const router = express.Router()

router.get('/', getEmploye)
router.get('/views/:id', viewsEmploye)
router.post('/employe', postEmploye)
router.delete('/employe/:id', deleteEmploye)
router.put('/employe/:id', updateEmploye)

router.get('/contrat', getContrat)
router.get('/contrat/views/:id', viewsContrat)
router.get('/avantages', getAvantage)
router.get('/contratType', getContratType)
router.get('/statusContrat', getStatusContrat)
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

router.get('/mission', getMission)
router.get('/missionView/:id', getMissionView)
router.post('/missions', postMission)
router.delete('/mission/:id',deleteMission)
router.get('/allmission',getAllMission)

router.get('/duration', getDuration)
router.get('/salaireMission', getSalaireMission)


router.get('/horaire', getHoraire)
router.post('/horairesPost', postHoraire)
router.get('/horaires/:id', getAllHoraire)
router.delete('/deleteHoraire/:id', deleteHoraire)
router.put('/horaires/:id',putHoraires)

router.get('/presence', getPresence)
router.post('/presences', postPresence)
router.delete('/presence/:id', deletePresence)
router.put('/presencePut', updatePresence)

export default router
