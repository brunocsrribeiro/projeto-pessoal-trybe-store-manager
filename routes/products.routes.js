const express = require('express');
const productController = require('../controllers/productsControllers');

const productsRouters = express.Router();

productsRouters
  .get('/', productController.listAll)
  .get('/:id', productController.getProductById);
  // .post('/', productController)
  // .put('/:id', productController)
  // .delete('/:id', productController)

module.exports = {
  productsRouters,
};
