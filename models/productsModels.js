const { connection } = require('./connection');

const getAll = async () => {
  const allProducts = 'SELECT * FROM products';

  const [products] = await connection.execute(allProducts);

  return products;
};

const getProductById = async (id) => {
  const productById = 'SELECT * FROM products WHERE id = ?';

  const [product] = await connection.execute(productById, [id]);

  return product;
};

module.exports = {
  getAll,
  getProductById,
};
