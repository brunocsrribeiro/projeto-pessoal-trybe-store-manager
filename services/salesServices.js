const SaleModel = require('../models/salesModels');

const getAll = async () => {
  const sales = await SaleModel.getAll();

  return sales;
};

const getSalesById = async (id) => {
  const saleById = await SaleModel.getSalesById(id);

  return saleById;
};

module.exports = {
  getAll,
  getSalesById,
};
