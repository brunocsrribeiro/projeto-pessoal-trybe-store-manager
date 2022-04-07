const { connection } = require('./connection');

const getAll = async () => {
  const allProducts = 'SELECT * FROM products ORDER BY id';

  const [products] = await connection.execute(allProducts);

  return products;
};

const getProductById = async (id) => {
  const productById = 'SELECT * FROM products WHERE id = ?';

  const [product] = await connection.execute(productById, [id]);

  return product[0];
};

const createProduct = async (product) => {
  const newProduct = `
    INSERT INTO
      products (name, quantity)
    VALUES
      (?, ?);
  `;

  const [{ insertId }] = await connection.execute(
      newProduct,
      [product.name, product.quantity],
  );

  return {
    id: insertId,
    ...product,
  };
};

const findByName = async (name) => {
  const allNames = `
    SELECT * FROM products
    WHERE name = ?;
  `;

  const [existName] = await connection.execute(allNames, [name]);
  console.log(existName);

  return existName;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  findByName,
};
