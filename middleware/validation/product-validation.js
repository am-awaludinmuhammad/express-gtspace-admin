const { body } = require('express-validator');
const { validationResult } = require('express-validator');
const fs = require('fs');

const validateStoreProduct = [
  body('name').not().isEmpty().trim().escape(),
  body('brand_id').not().isEmpty().trim().escape(),
  body('category_id').not().isEmpty().trim().escape(),
  body('price').not().isEmpty().trim().escape()
];

const productValidationResult = (req, res, next) => {
  try {
    let errResults = [];
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if (req.file) {
        console.log(req.file);
        fs.unlinkSync(`./public/images/products/${req.file.filename}`);
      }
      errResults = errors.array();
    }
    if (req.fileValidationError) {
      errResults.push(req.fileValidationError);
    }

    if (errResults.length) {
      return res.status(400).json({errors: errResults});
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong!',
      err: error
    });
  }
  next()
}

module.exports = {
    validateStoreProduct,
    productValidationResult
}