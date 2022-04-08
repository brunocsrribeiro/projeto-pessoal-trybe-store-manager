const express = require('express');
const saleController = require('../controllers/salesControllers');
const { validateSales, findByIdSale } = require('../middlewares/validateMiddleware');

const salesRouters = express.Router();

salesRouters
  .get('/', saleController.listAll)
  .get('/:id', findByIdSale, saleController.getSalesById)
  .post('/', validateSales, saleController.createdSales)
  .put('/:id', validateSales, findByIdSale, saleController.updateSales)
  .delete('/:id', findByIdSale, saleController.deleteSales);

module.exports = {
  salesRouters,
};
