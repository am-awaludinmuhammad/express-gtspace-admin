const knex = require('../db/knex');

exports.getAll = async () => {
  return await knex
  .select('products.*', 'brands.name as brand_name', 'categories.name as category_name')
  .join('brands', 'products.brand_id', '=', 'brands.id')
  .join('categories', 'products.category_id', '=', 'categories.id')
  .from('products');
};

exports.create = async (data) => {
  return await knex('products')
    .insert({
      category_id: data.category_id,
      brand_id: data.brand_id,
      name: data.name,
      price: data.price,
      thumbnail: data.thumbnail,
      description: data.description
    });
};