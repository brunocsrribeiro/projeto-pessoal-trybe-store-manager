const SaleModel = require('../models/salesModels');

const getAll = async () => {
  const sales = await SaleModel.getAll();
  return sales;
};

const getSalesById = async (id) => {
  const saleById = await SaleModel.getSalesById(id);
  return saleById;
};

const createSales = async (sale) => {
  const created = await SaleModel.createSales(sale);
  return created;
};

const createdSales = async (sale) => {
  const createdSale = await SaleModel.createdSales(sale);
  return createdSale;
};

const deleteSales = async (id) => {
  const deleteSale = await SaleModel.deleteSales(id);
  return deleteSale;
};

const findByIdSale = async (id) => {
  const idExist = await SaleModel.findByIdSale(id);
  return idExist;
};

module.exports = {
  getAll,
  getSalesById,
  createdSales,
  createSales,
  deleteSales,
  findByIdSale,
};
