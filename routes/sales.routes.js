const express = require('express');
const saleController = require('../controllers/salesControllers');
const { findByIdSale } = require('../middlewares/validateMiddleware');

const salesRouters = express.Router();

salesRouters
  .get('/', saleController.listAll)
  .get('/:id', findByIdSale, saleController.getSalesById);
  // .delete('/:id', findByIdSale, saleController.deleteSales);
  // .post('/', saleController.createSales)
  // .put('/:id', saleController)

module.exports = {
  salesRouters,
};
