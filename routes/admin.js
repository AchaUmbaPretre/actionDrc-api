const express = require('express')
const {
    countPresence,
    deleteAffectation,
    deleteClient,
    deleteContrat,
    deleteEmploye,
    deleteFacture,
    deleteHoraire,
    deleteMission,
    deletePayement,
    deletePresence,
    getAffectation,
    getAffectationCount,
    getAllAffectation,
    getAllContrat,
    getAllFacture,
    getAllFactureView,
    getAllHoraire,
    getAllHoraireView,
    getAllMission,
    getAllMissionView,
    getAllPresence,
    getAllPresenceView,
    getAvantage,
    getClient,
    getClientCount,
    getCompetence,
    getContrat,
    getContratAff,
    getContratCount,
    getContratType,
    getDuration,
    getEmploieDispo,
    getEmploye,
    getEmployeCount,
    getFacture,
    getFonction,
    getFonctionDetail,
    getHoraire,
    getMission,
    getMissionContrat,
    getMissionView,
    getMissionWeek,
    getMontantStatus,
    getNiveau,
    getPayement,
    getPayementAll,
    getPays,
    getPresence,
    getProvince,
    getSalaireMission,
    getSite,
    getStatus,
    getStatusContrat,
    getType,
    postAffectation,
    postClient,
    postContrat,
    postEmploye,
    postFacture,
    postHoraire,
    postMission,
    postPayement,
    postPresence,
    putHoraires,
    updateContrat,
    updateEmploye,
    updateEmployeFonction,
    updateFacture,
    updateMission,
    updatePresence,
    viewsClient,
    viewsContrat,
    viewsEmploye,
    getAllAffectationOne,
    postContratInfo,
    getContratInfo,
    getContratInfosAll,
    getContratInfosAllOne,
    postFonctionClient,
    postContratEmploie,
    postSites,
  } = require("../controllers/adminControllers.js");
const router = express.Router()

router.get('/', getEmploye)
router.get('/views/:id', viewsEmploye)
router.get('/count', getEmployeCount)
router.post('/employe', postEmploye)
router.put('/employes/:id', deleteEmploye)
router.put('/employe/:id', updateEmploye)

router.get('/competence', getCompetence)
router.get('/niveau', getNiveau)
router.get('/typepiece', getType)
router.get('/status', getStatus)

router.get('/contrat', getAllContrat)
router.get('/contratCount', getContratCount)
router.get('/contrat/views/:id', viewsContrat)
router.get('/avantages', getAvantage)
router.get('/contratType', getContratType)
router.get('/statusContrat', getStatusContrat)
router.get('/contratInfo', getContratInfosAll)
router.get('/contratInfo/:id', getContratInfosAllOne)
/* router.get('/contratInfo', getContratInfo) */
router.post('/contrat', postContrat)
router.post('/contratEmploie', postContratEmploie)
router.post('/ContratInfo', postContratInfo)
router.delete('/contrat/:id', deleteContrat)
router.put('/contrat/:id', updateContrat)



router.get('/client', getClient)
router.get('/province', getProvince)
router.get('/pays', getPays)
router.get('/clientCount', getClientCount)
router.get('/viewsClient/:id', viewsClient)
router.post('/clientPost', postClient)
router.delete('/client/:id', deleteClient)
router.put('/client/:id', updateContrat)


router.get('/fonction', getFonction)
router.get('/fonctionDetail/:id', getFonctionDetail)
router.get('/emploieDispo', getEmploieDispo)
router.post('/postFonctionClient', postFonctionClient)
router.put('fonctionUpdate', )
router.put('/employeFonctionPut/:id', updateEmployeFonction)


router.get('/affectationCount', getAffectationCount)
router.post('/affectations', postAffectation)
router.get('/affectation', getAffectation)
router.get('/affectations/:id', getAllAffectationOne)
router.get('/allaffectation', getAllAffectation)
router.delete('/deleteAff/:id', deleteAffectation)

router.get('/mission', getMission)
router.get('/missionWeek', getMissionWeek)
router.get('/sites/:id', getSite)
router.post('/sites',postSites)
router.get('/missionView/:id', getMissionView)
router.get('/missionContrat/:id', getMissionContrat)
router.get('/contrats/:contratId/agents', getContratAff)
router.post('/missions', postMission)
router.delete('/mission/:id',deleteMission)
router.get('/allmission',getAllMission)
router.get('/missionAllView/:id',getAllMissionView)
router.get('/duration', getDuration)
router.get('/salaireMission', getSalaireMission)
router.put('/updateMission/:id', updateMission)

router.get('/horaire', getHoraire)
router.post('/horairesPost', postHoraire)
router.get('/horaires', getAllHoraire)
router.get('/horairesAllView/:id', getAllHoraireView)
router.delete('/deleteHoraire/:id', deleteHoraire)
router.put('/horaires/:id',putHoraires)

router.get('/presence', getPresence)
router.get('/presenceAll', getAllPresence)
router.get('/presenceAllView/:id', getAllPresenceView)
router.get('/presenceCount/:id', countPresence)
router.post('/presences', postPresence)
router.delete('/presence/:id', deletePresence)
router.put('/presencePut/:id', updatePresence)

router.get('/statusFacture', getMontantStatus);
router.get('/facture', getFacture);
router.get('/factureAll', getAllFacture);
router.get('/factureAllView/:id', getAllFactureView);
router.post('/factures', postFacture);
router.delete('/facture/:id', deleteFacture);
router.put('/factureUpdate/:id', updateFacture)

router.get('/payement', getPayement);
router.get('/payementAll', getPayementAll);
router.get('/payementView', getAllFactureView);
router.post('/payementPost', postPayement);
router.delete('/payement/:id', deletePayement);

module.exports = router;