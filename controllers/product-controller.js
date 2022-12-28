const productRepository = require('../repositories/product-repository');
const brandRepository = require('../repositories/brand-repository');
const categoryRepository = require('../repositories/category-repository');
const { validationResult } = require('express-validator');
const fs = require('fs');
const { MulterError } = require('multer');

exports.index = async (req, res) => {
  const products = await productRepository.getAll();
  res.render('products/index', { 
    products: products,
    pageTitle: 'Products'
  });
}

exports.create = async (req, res) => {
  const brands = await brandRepository.getAll();
  const categories = await categoryRepository.getAll();

  res.render('products/create', { 
    pageTitle: 'Create Product',
    categories: categories,
    brands: brands,
  });
}

exports.store = async (req, res) => {
  try {
    const product = {
      category_id: req.body.category_id,
      brand_id: req.body.brand_id,
      name: req.body.name,
      price: req.body.price,
      thumbnail: req.files.thumbnail[0].filename,
      description: req.body.description
    };

    const moreImages = [];
    if (req.files.more_images) {
      req.files.more_images.forEach(img => {
        moreImages.push({
          file_name: img.filename
        });
      });
    }
    product.more_images = moreImages;

    const data = await productRepository.create(product);

    return res.status(200).json({
      sucess: true,
      data: data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong!',
      err: error
    });
 }
}