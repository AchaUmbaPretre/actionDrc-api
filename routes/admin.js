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
    getContratInfosAll,
    getContratInfosAllOne,
    postFonctionClient,
    postContratEmploie,
    postSites,
    updateClient,
    getContratEmploie,
    getContratEmploieOne,
    getContratFonctionAllOne,
    contratFonctionUpdate,
    getMethodePaiement,
    getMois,
    getPayementView,
    deleteContratInfo,
    getcontratTitle,
    affectationUpdate,
    getAffectationUn,
    getMissionContratTitle,
    getFactureCalcul,
    getFactureCalculTotal,
    getFactureContratCount,
    getSiteAll,
    deleteSite,
    sitesUpdate,
    getSiteOne,
    CountPresenceGroup,
    getPayementTotal,
    updatePaiement,
    getPresenceOneView,
    getAllPresenceViewCounter,
    getPayementTotalSelect,
    affectationPutAgent,
    getRapportPresence,
    getDepartement,
    postDepartement,
    deleteDepartement,
    updateDepartement,
    viewsDepartement,
    getEmployeCorbeille,
    deleteCorbeilleEmploye,
    getAllCorbeilleContrat,
    deleteCorbeilleContrats,
  } = require("../controllers/adminControllers.js");
const router = express.Router()

router.get('/', getEmploye)
router.get('/corbeille-employe', getEmployeCorbeille)
router.get('/views/:id', viewsEmploye)
router.get('/count', getEmployeCount)
router.post('/employe', postEmploye)
router.put('/employes/:id', deleteEmploye)
router.put('/employe/:id', updateEmploye)
router.delete('/employes-corbeille/:id', deleteCorbeilleEmploye)

router.get('/departement', getDepartement)
router.get('/departement/:id', viewsDepartement)
router.post('/departement', postDepartement)
router.delete('/departement/:id', deleteDepartement)
router.put('/departement/:id', updateDepartement)

router.get('/competence', getCompetence)
router.get('/niveau', getNiveau)
router.get('/typepiece', getType)
router.get('/status', getStatus)

router.get('/contrat', getAllContrat)
router.get('/contrat-corbeille', getAllCorbeilleContrat)
router.get('/contratCount', getContratCount)
router.get('/contrat/views/:id', viewsContrat)
router.get('/avantages', getAvantage)
router.get('/contratType', getContratType)
router.get('/statusContrat', getStatusContrat)
router.get('/contratEmploie', getContratEmploie)
router.get('/contratEmploie/:id', getContratEmploieOne)
router.get('/contratTitle/:id', getcontratTitle)
router.post('/contrat', postContrat)
router.post('/contratEmploie', postContratEmploie)
router.put('/contrats/:id', deleteContrat)
router.put('/contrat/:id', updateContrat)
router.delete('/contrat-corbeille/:id', deleteCorbeilleContrats)


router.get('/contratInfo', getContratInfosAll)
router.get('/contratInfo/:id', getContratInfosAllOne)
router.get('/contratFonctionOne/:id', getContratFonctionAllOne)
router.delete('/contratInfo/:id', deleteContratInfo)
router.put('/contratFonctionUpdate/:id', contratFonctionUpdate)
router.post('/ContratInfo', postContratInfo)


router.get('/client', getClient)
router.get('/province', getProvince)
router.get('/pays', getPays)
router.get('/clientCount', getClientCount)
router.get('/viewsClient/:id', viewsClient)
router.post('/clientPost', postClient)
router.put('/clients/:id', deleteClient)
router.put('/client/:id', updateClient)


router.get('/fonction', getFonction)
router.get('/fonctionDetail/:id', getFonctionDetail)
router.get('/emploieDispo', getEmploieDispo)
router.post('/postFonctionClient', postFonctionClient)
router.put('/employeFonctionPut/:id', updateEmployeFonction)


router.get('/affectationCount', getAffectationCount)
router.post('/affectations', postAffectation)
router.get('/affectation', getAffectation)
router.get('/affectation/:id', getAffectationUn)
router.get('/affectations/:id', getAllAffectationOne)
router.get('/allaffectation', getAllAffectation)
router.put('/deleteAff/:id', deleteAffectation)
router.put('/affectationPutAgent/:id', affectationPutAgent)
router.put('/affectationPut/:id', affectationUpdate)

router.get('/mission', getMission)
router.get('/missionWeek', getMissionWeek)
router.get('/missionView/:id', getMissionView)
router.get('/missionContrat/:id', getMissionContrat)
router.get('/missionContratTitle/:id', getMissionContratTitle)
router.get('/contrats/:contratId/agents', getContratAff)
router.post('/missions', postMission)
router.delete('/mission/:id',deleteMission)
router.get('/allmission',getAllMission)
router.get('/missionAllView/:id',getAllMissionView)
router.get('/duration', getDuration)
router.get('/salaireMission', getSalaireMission)
router.put('/updateMission/:id', updateMission)

router.get('/sites', getSiteAll)
router.get('/sitesOne/:id', getSiteOne)
router.get('/sites/:id', getSite)
router.post('/sites',postSites)
router.put('/siteDelete/:id',deleteSite)
router.put('/sitesUpdate/:id',sitesUpdate)

router.get('/horaire', getHoraire)
router.post('/horairesPost', postHoraire)
router.get('/horaires', getAllHoraire)
router.get('/horairesAllView/:id', getAllHoraireView)
router.delete('/deleteHoraire/:id', deleteHoraire)
router.put('/horaires/:id',putHoraires)

router.get('/presence', getPresence)
router.get('/presenceAll', getAllPresence)
router.get('/presenceOneView/:id', getPresenceOneView)
router.get('/presenceAllView/:id', getAllPresenceView)
router.get('/presenceAllViewCounter', getAllPresenceViewCounter)
router.get('/presenceCount/:id', countPresence)
router.get('/presenceCountGroup/:id', CountPresenceGroup)
router.post('/presences', postPresence)
router.delete('/presence/:id', deletePresence)
router.put('/presencePut/:id', updatePresence)

router.get('/rapportPresence', getRapportPresence)

router.get('/statusFacture', getMontantStatus);
router.get('/facture', getFacture);
router.get('/factureAll', getAllFacture);
router.get('/factureCalcul/:id', getFactureCalcul);
router.get('/factureCalculTotal/:id', getFactureCalculTotal);
router.get('/factureContratCount/:id', getFactureContratCount);
router.get('/factureAllView/:id', getAllFactureView);
router.post('/factures', postFacture);
router.put('/factures/:id', deleteFacture);
router.put('/factureUpdate/:id', updateFacture)

router.get('/payement', getPayement);
router.get('/paiementMethode', getMethodePaiement);
router.get('/payementView/:id', getPayementView);
router.get('/payementTotal/:id', getPayementTotal);
router.get('/payementTotalSelect/:employeeId/:month', getPayementTotalSelect);
router.post('/payementPost', postPayement);
router.put('/payement/:id', deletePayement);
router.put('/payementPut/:id', updatePaiement);

router.get('/mois', getMois)

module.exports = router;