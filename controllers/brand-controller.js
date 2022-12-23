const brandRepository = require('../repositories/brand-repository');

exports.index = async (req, res) => {
  const brands = await brandRepository.getAll();
  res.render(
    'brands/index', 
    {
      headerName: 'Brands',
      brands: brands
    }
  );
}

exports.store = async (req, res) => {
  const data = {
    name: req.body.name,
  }
  await brandRepository.store(data);
  res.redirect('/master/brands');
}

exports.update = async (req, res) => {
  const data = {
    name: req.body.name
  }
  await brandRepository.update(req.params.id, data)
  res.redirect('/master/brands');
}