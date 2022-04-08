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

const createSales = async (id, sale) => {
  const queryNewSale = `
    INSERT INTO
      sales_products (sale_id, product_id, quantity)
    VALUES
      (?, ?, ?);
  `;

  await Promise.all(sale.map(async ({ productId, quantity }) => {
    await connection.execute(
      queryNewSale,
        [id, productId, quantity],
    );
  }));

  return {
    id,
    itemsSold: sale,
  };
};

const createdSales = async (sale) => {
  const queryIdNewSale = `
    INSERT INTO sales
    VALUES ()
  `;

  const [{ insertId }] = await connection.execute(queryIdNewSale);
  
  const createSalesFunc = await createSales(insertId, sale);

  return createSalesFunc;
};

const deleteSales = async (id) => {
  const queryDeleteSale = `
    DELETE FROM sales_products
    WHERE sale_id = ?;
  `;

  await connection.execute(
    queryDeleteSale,
      [id],
  );
};

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
  createdSales,
  createSales,
  deleteSales,
  findByIdSale,
};
