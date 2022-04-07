const SaleModel = require('../models/salesModels');

const getAll = async () => {
  const sales = await SaleModel.getAll();
  return sales;
};

const getSalesById = async (id) => {
  const saleById = await SaleModel.getSalesById(id);
  return saleById;
};

// const deleteSales = async (id) => {
//   const deleteSale = await SaleModel.deleteSales(id);
//   return deleteSale;
// };

const findByIdSale = async (id) => {
  const idExist = await SaleModel.findByIdSale(id);
  return idExist;
};

module.exports = {
  getAll,
  getSalesById,
  // deleteSales,
  findByIdSale,
};
