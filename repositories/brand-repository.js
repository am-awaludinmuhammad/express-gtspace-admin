const knex = require('../db/knex');

exports.getAll = async (options) => {
    const {page} = options;

    return await knex('brands')
        .paginate({ perPage: 5, currentPage: page });
} 