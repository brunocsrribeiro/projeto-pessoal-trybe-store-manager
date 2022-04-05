const { connection } = require('./connection');

const getAll = async () => {
  const allProducts = 'SELECT * FROM products ORDER BY id';

  const [products] = await connection.execute(allProducts);

  return products;
};

const getProductById = async (id) => {
  const productById = 'SELECT * FROM products WHERE id = ?';

  const [product] = await connection.execute(productById, [id]);
  console.log(product);

  return product[0];
};

module.exports = {
  getAll,
  getProductById,
};
