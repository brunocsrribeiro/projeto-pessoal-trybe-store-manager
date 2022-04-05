const express = require('express');
const saleController = require('../controllers/salesControllers');

const salesRouters = express.Router();

salesRouters
  .get('/', saleController.listAll)
  .get('/:id', saleController.getSalesById);
  // .post('/', saleController)
  // .put('/:id', saleController)

module.exports = {
  salesRouters,
};
