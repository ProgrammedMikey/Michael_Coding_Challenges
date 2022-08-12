const express = require('express');
const router = express.Router();
const treeController = require('../controllers/treeController');


// APP Routes
router.get('/api/tree/', treeController.listTree);
router.post('/api/tree/', treeController.insertTree);

module.exports = router;