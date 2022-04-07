const express = require('express');
const productController = require('../controllers/productsControllers');
const { validateProducts, findByName } = require('../middlewares/validateMiddleware');

const productsRouters = express.Router();

productsRouters
  .get('/', productController.listAll)
  .get('/:id', productController.getProductById)
  .post('/', validateProducts, findByName, productController.createProduct);
  // .put('/:id', productController)
  // .delete('/:id', productController)

module.exports = {
  productsRouters,
};
