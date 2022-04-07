const express = require('express');
const productController = require('../controllers/productsControllers');
const {
  validateProducts,
  findByName,
  findByIdProduct,
} = require('../middlewares/validateMiddleware');

const productsRouters = express.Router();

productsRouters
  .get('/', productController.listAll)
  .get('/:id', findByIdProduct, productController.getProductById)
  .post('/', validateProducts, findByName, productController.createProduct)
  .put('/:id', validateProducts, findByIdProduct, productController.updateProducts)
  .delete('/:id', findByIdProduct, productController.deleteProducts);

module.exports = {
  productsRouters,
};
