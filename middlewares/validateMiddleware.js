const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');
require('./errorMiddleware');
const productService = require('../services/productsServices');

const schemaProducts = Joi.object().keys({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const schemaSales = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateProducts = (req, _res, next) => {
  const { error } = schemaProducts.validate(req.body);

  if (error) throw error;

  next();
};

const validateSales = (req, _res, next) => {
  const { error } = schemaSales.validate(req.body);

  if (error) throw error;

  next();
};

const findByName = async (req, res, next) => {
  const { name } = req.body;

  const existName = await productService.findByName(name);
  
  if (existName.length > 0) {
    return res.status(StatusCodes.CONFLICT).json({ message: 'Product already exists' });
  }

  next();
};

module.exports = {
  validateProducts,
  validateSales,
  findByName,
};
