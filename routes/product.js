const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

const { uploadImage } = require('../middleware/upload-image')
const { validateStoreProduct, productValidationResult } = require('../middleware/validation/product-validation');

router.get('/', productController.index);
router.post(
  '/', 
  uploadImage({destination: 'products'}).fields([{name: 'thumbnail'}, {name: 'more_images'}]), 
  validateStoreProduct,
  productValidationResult,
  productController.store
);

router.get('/create', productController.create);

module.exports = router;