const { StatusCodes, getReasonPhrase } = require('http-status-codes');
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

    if (!product) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({
          message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)
              .toLowerCase()}`,
        });
    }

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

module.exports = {
  listAll,
  getProductById,
  createProduct,
  updateProducts,
};
