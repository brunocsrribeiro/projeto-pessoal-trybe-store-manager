const express = require('express');
const saleController = require('../controllers/salesControllers');
// const { validateSales } = require('../middlewares/validateMiddleware');

const salesRouters = express.Router();

salesRouters
  .get('/', saleController.listAll)
  .get('/:id', saleController.getSalesById);
  // .post('/', saleController.createSales);
  // .put('/:id', saleController)

module.exports = {
  salesRouters,
};
