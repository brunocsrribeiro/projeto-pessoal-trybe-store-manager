const { connection } = require('./connection');

const getAll = async () => {
  const queryAllProducts = 'SELECT * FROM products ORDER BY id';

  const [products] = await connection.execute(queryAllProducts);

  return products;
};

const getProductById = async (id) => {
  const queryProductById = 'SELECT * FROM products WHERE id = ?';

  const [product] = await connection.execute(queryProductById, [id]);

  return product[0];
};

const createProduct = async (product) => {
  const queryNewProduct = `
    INSERT INTO
      products (name, quantity)
    VALUES
      (?, ?);
  `;

  const [{ insertId }] = await connection.execute(
      queryNewProduct,
      [product.name, product.quantity],
  );

  return {
    id: insertId,
    ...product,
  };
};

const updateProducts = async (product) => {
  const queryUpdateProduct = `
    UPDATE products
    SET
      name = ?,
      quantity = ?
    WHERE id = ?;
  `;

  await connection.execute(
      queryUpdateProduct,
      [product.name, product.quantity, product.id],
  );

  return product;
};

const findByName = async (name) => {
  const queryAllNames = `
    SELECT * FROM products
    WHERE name = ?;
  `;

  const [existName] = await connection.execute(queryAllNames, [name]);

  return existName;
};

const findById = async (id) => {
  const queryFindById = `
    SELECT * FROM products
    WHERE id = ?;
  `;

  const [existId] = await connection.execute(queryFindById, [id]);

  return existId;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  findByName,
  findById,
  updateProducts,
};
