const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand-controller');

router.get('/', brandController.index);
router.post('/', brandController.store);
router.post('/:id', brandController.update);

module.exports = router;