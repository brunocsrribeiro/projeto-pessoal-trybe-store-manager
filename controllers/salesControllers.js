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

const createdSales = async (req, res, next) => {
  try {
    console.log(req.body);
    const sale = req.body;

    const createdSale = await saleService.createdSales(sale);

    return res.status(StatusCodes.CREATED).json(createdSale);
  } catch (error) {
    next(error);
  }
};

const createSales = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    const created = await saleService.createSales({ productId, quantity });

    return res.status(StatusCodes.CREATED).json(created);
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
  createdSales,
  createSales,
  deleteSales,
};