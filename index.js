require('dotenv').config();
const express = require('express');
const routerProducts = require('./routes/products.routes');
const routerSales = require('./routes/sales.routes');
const { error } = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app
  .use('/products', routerProducts.productsRouters)
  .use('/sales', routerSales.salesRouters);

app.use(error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
