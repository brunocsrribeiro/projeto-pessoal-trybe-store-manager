const { StatusCodes, getReasonPhrase } = require('http-status-codes');
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

    if (sale.length === 0) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({
          message: `Sale ${getReasonPhrase(StatusCodes.NOT_FOUND)
              .toLowerCase()}`,
        });
    }

    res.status(StatusCodes.OK).json(sale);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listAll,
  getSalesById,
};