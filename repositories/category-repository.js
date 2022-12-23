const knex = require('../db/knex');

exports.getAll = async () => {
  return await knex('categories');
}

exports.store = async (data) => {
  return await knex('categories').insert({ name: data.name });
}

exports.update = async (id, data) => {
  return await knex('categories')
    .where('id', id)
    .update({ name: data.name });
}