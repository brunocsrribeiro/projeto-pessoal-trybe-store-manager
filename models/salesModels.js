const { connection } = require('./connection');

const getAll = async () => {
  const allSales = `
    SELECT
      sale_id AS saleId,
      date,
      product_id AS productId,
      quantity
    FROM
      sales_products
    INNER JOIN
      sales
    ON sale_id = id;
    `;

  const [sales] = await connection.execute(allSales);

  return sales;
};

const getSalesById = async (id) => {
  const saleById = `
    SELECT
      date,
      product_id AS productId,
      quantity
    FROM
      sales_products
    INNER JOIN 
      sales
    ON sale_id = id
    WHERE id = ?
  `;

  const [sale] = await connection.execute(saleById, [id]);

  return sale;
};

module.exports = {
  getAll,
  getSalesById,
};
