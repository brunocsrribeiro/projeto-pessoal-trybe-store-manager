const ProductModel = require('../models/productsModels');

const getAll = async () => {
  const products = await ProductModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const productById = await ProductModel.getProductById(id);
  return productById;
};

const createProduct = async (product) => {
  const created = await ProductModel.createProduct(product);
  return created;
};

const findByName = async (name) => {
  const nameExist = await ProductModel.findByName(name);
  return nameExist;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  findByName,
};
