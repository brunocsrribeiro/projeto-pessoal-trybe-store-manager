const ProductModel = require('../models/productsModels');

const getAll = async () => {
  const products = await ProductModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const productById = await ProductModel.getProductById(id);

  return productById;
};

module.exports = {
  getAll,
  getProductById,
};
