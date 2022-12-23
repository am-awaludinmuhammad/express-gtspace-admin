const knex = require('../db/knex');

exports.getAll = async () => {
  return await knex('brands');
}

exports.store = async (data) => {
  return await knex('brands')
    .insert({name: data.name});
}

exports.update = async (id, data) => {
  return await knex('brands')
    .where('id', id)
    .update({
      name: data.name,
      updated_at: new Date()
    });
}