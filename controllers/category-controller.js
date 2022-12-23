const categoryRepository = require('../repositories/category-repository');

exports.index = async (req, res) => {
    const data = await categoryRepository.getAll();
    res.render('categories/index', { data });
}

exports.store = async (req, res) => {
    await categoryRepository.store({ name: req.body.name });
    res.redirect('/master/categories');
}

exports.update = async (req, res) => {
    await categoryRepository.update(req.params.id, { name: req.body.name })
    res.redirect('/master/categories');
}