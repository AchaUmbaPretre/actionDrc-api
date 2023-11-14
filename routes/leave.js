const express = require('express');
const router = express.Router();
const { getLeave, postLeave, deleteLeave, updateLeave, getDemandeLeave, postDemandeLeave, deleteDemandeLeave, updateDemandeLeave } = require('../controllers/leaveControllers.js');

router.get('/typeConge', getLeave);
router.post('/typeConge', postLeave);
router.delete('/typeConge/:id', deleteLeave);
router.put('/typeConge', updateLeave);

router.get('/demandeConge', getDemandeLeave);
router.post('/demandeConge', postDemandeLeave);
router.delete('/demandeConge/:id', deleteDemandeLeave);
router.put('/demandeConge', updateDemandeLeave);

module.exports = router;