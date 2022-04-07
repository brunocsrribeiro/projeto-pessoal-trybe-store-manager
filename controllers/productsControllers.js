const { StatusCodes } = require('http-status-codes');
const productService = require('../services/productsServices');

const listAll = async (_req, res, next) => {
  try {
    const products = await productService.getAll();

    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await productService.getProductById(id);

    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;

    const created = await productService.createProduct({ name, quantity });

    return res.status(StatusCodes.CREATED).json(created);
  } catch (error) {
    next(error);
  }
};

const updateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    
    const updatedProduct = await productService.updateProducts({
        id: +id,
        name,
        quantity,
    });

    return res.status(StatusCodes.OK).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    await productService.deleteProducts(id);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listAll,
  getProductById,
  createProduct,
  updateProducts,
  deleteProducts,
};
