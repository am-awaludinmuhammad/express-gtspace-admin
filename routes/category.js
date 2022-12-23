const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category-controller');

router.get('/', categoryController.index);
router.post('/', categoryController.store);
router.post('/:id', categoryController.update);

module.exports = router;