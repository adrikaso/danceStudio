const express = require('express');
const router = express.Router();

const tierController = require('../controllers/tierController');

router.get('/getAll', tierController.getAllTiers);
router.get('/getById/:id', tierController.getTierById);
router.post('/create', tierController.createTier);
router.delete('/delete/:id', tierController.deleteTier);

module.exports = router;