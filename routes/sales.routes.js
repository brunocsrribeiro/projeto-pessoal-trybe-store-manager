const express = require('express');
const saleController = require('../controllers/salesControllers');
const { validateSales, findByIdSale } = require('../middlewares/validateMiddleware');

const salesRouters = express.Router();

salesRouters
  .get('/', saleController.listAll)
  .get('/:id', findByIdSale, saleController.getSalesById)
  .post('/', validateSales, saleController.createdSales)
  .delete('/:id', findByIdSale, saleController.deleteSales);
  // .put('/:id', saleController)

module.exports = {
  salesRouters,
};
