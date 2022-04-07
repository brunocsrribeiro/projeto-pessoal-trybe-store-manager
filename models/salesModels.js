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
    ORDER BY id ASC;
  `;

  const [sale] = await connection.execute(saleById, [id]);

  return sale;
};

// const deleteSales = async (id) => {
//   const queryDeleteSale = `
//     DELETE FROM sales_products
//     WHERE sale_id = ?;
//   `;

//   await connection.execute(
//     queryDeleteSale,
//       [id],
//   );
// };

const findByIdSale = async (id) => {
  const queryFindById = `
    SELECT * FROM sales
    JOIN sales_products
    ON sale_id = id
    WHERE id = ?;
  `;

  const [existId] = await connection.execute(queryFindById, [id]);

  return existId;
};

module.exports = {
  getAll,
  getSalesById,
  // deleteSales,
  findByIdSale,
};
