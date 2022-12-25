const brands = {
    index: '/master/brands',
    update: '/master/brands/:id'
};

const categories = {
    index: '/master/categories',
    update: '/master/categories/:id'
};

const products = {
    index: '/master/products',
    create: '/master/products/create',
    detail: '/master/products/:id'
};

const routes = { brands, categories, products }

export { routes }