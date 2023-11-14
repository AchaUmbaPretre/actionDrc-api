const express = require('express');
const router = express.Router();
const { getLeave, postLeave, deleteLeave, updateLeave, getDemandeLeave, postDemandeLeave, deleteDemandeLeave, updateDemandeLeave, viewsDemandeLeave, viewsLeave } = require('../controllers/leaveControllers.js');

router.get('/typeConge', getLeave);
router.get('/typeConge/:id', viewsLeave);
router.post('/typeConge', postLeave);
router.delete('/typeConge/:id', deleteLeave);
router.put('/typeConge', updateLeave);

router.get('/demandeConge', getDemandeLeave);
router.get('/demandeConge/:id', viewsDemandeLeave);
router.post('/demandeConge', postDemandeLeave);
router.delete('/demandeConge/:id', deleteDemandeLeave);
router.put('/demandeConge', updateDemandeLeave);

module.exports = router;