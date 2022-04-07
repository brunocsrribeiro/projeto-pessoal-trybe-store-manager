const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/salesServices');

const listAll = async (_req, res, next) => {
  try {
    const sales = await saleService.getAll();

    res.status(StatusCodes.OK).json(sales);
  } catch (error) {
    next(error);
  }
};

const getSalesById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sale = await saleService.getSalesById(id);

    res.status(StatusCodes.OK).json(sale);
  } catch (error) {
    next(error);
  }
};

const deleteSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    await saleService.deleteSales(id);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listAll,
  getSalesById,
  deleteSales,
};