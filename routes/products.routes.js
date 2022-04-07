const express = require('express');
const productController = require('../controllers/productsControllers');
const { validateProducts, findByName, findById } = require('../middlewares/validateMiddleware');

const productsRouters = express.Router();

productsRouters
  .get('/', productController.listAll)
  .get('/:id', findById, productController.getProductById)
  .post('/', validateProducts, findByName, productController.createProduct)
  .put('/:id', findById, productController.updateProducts)
  .delete('/:id', findById, productController.deleteProducts);

module.exports = {
  productsRouters,
};
