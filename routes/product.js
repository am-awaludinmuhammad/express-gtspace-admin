const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

const { upload } = require('../middleware/image-upload')

router.get('/', productController.index);
router.post(
  '/', 
  upload({destination: 'products'}).single('thumbnail'), 
  productController.store
);

router.get('/create', productController.create);

module.exports = router;