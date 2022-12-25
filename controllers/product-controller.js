const productRepository = require('../repositories/product-repository');
const brandRepository = require('../repositories/brand-repository');
const categoryRepository = require('../repositories/category-repository');

exports.index = async (req, res) => {
  const products = await productRepository.getAll();
  console.log(products);
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
  const data = {
    category_id: req.body.category_id,
    brand_id: req.body.brand_id,
    name: req.body.name,
    price: req.body.price,
    thumbnail: req.file.filename,
    description: req.body.description
  };
  await productRepository.create(data);
  res.redirect('/master/products');
}