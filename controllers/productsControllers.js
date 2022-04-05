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

    if (product.length === 0) {
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

module.exports = {
  listAll,
  getProductById,
};
