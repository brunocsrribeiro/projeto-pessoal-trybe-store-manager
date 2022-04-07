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

const updateProducts = async (product) => {
  const update = await ProductModel.updateProducts(product);
  return update;
};

const deleteProducts = async (id) => {
  const deleteProduct = await ProductModel.deleteProducts(id);
  return deleteProduct;
};

const findById = async (id) => {
  const idExist = await ProductModel.findById(id);
  return idExist;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  findByName,
  findById,
  updateProducts,
  deleteProducts,
};
