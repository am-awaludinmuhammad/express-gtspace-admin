const brandRepository = require('../repositories/brand-repository');

exports.index = async (req, res) => {
    const page = req.query.page ?? 1;
    const brands = await brandRepository.getAll({page});

    res.render(
        'brands/index', 
        {
            headerName: 'Brands',
            brands: brands
        }
    );
}