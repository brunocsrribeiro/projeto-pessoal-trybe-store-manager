const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const Joi = require('joi');
require('./errorMiddleware');
const productService = require('../services/productsServices');
const saleService = require('../services/salesServices');

const schemaProducts = Joi.object().keys({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const schemaSales = Joi.object().keys({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateProducts = (req, _res, next) => {
  const { error } = schemaProducts.validate(req.body);

  if (error) throw error;

  next();
};

const validateSales = (req, _res, next) => {
  const validation = req.body;

  validation.forEach((valid) => {
    const { error } = schemaSales.validate(valid);
  
    if (error) throw error;
  });

  next();
};

const findByName = async (req, res, next) => {
  const { name } = req.body;

  const thisNameExists = await productService.findByName(name);
  
  if (thisNameExists.length > 0) {
    return res.status(StatusCodes.CONFLICT).json({ message: 'Product already exists' });
  }

  next();
};

const findByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  const thisIdExists = await productService.findByIdProduct(id);

  if (!thisIdExists.length) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)
          .toLowerCase()}`,
    });
  }

  next();
};

const findByIdSale = async (req, res, next) => {
  const { id } = req.params;

  const thisIdExists = await saleService.findByIdSale(id);

  if (!thisIdExists.length) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: `Sale ${getReasonPhrase(StatusCodes.NOT_FOUND)
          .toLowerCase()}`,
    });
  }

  next();
};

module.exports = {
  validateProducts,
  validateSales,
  findByName,
  findByIdProduct,
  findByIdSale,
};
