const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../models/connection');
const productsModel = require('../../../models/productsModels');

describe('Ao chamar a função getAll de productsModels', () => {
  before(() => {
    const products = [
      {
        id: 1,
        name: "produto A",
        quantity: 10
      },
      {
        id: 2,
        name: "produto B",
        quantity: 20
      }
    ];
  
    const result = [products, []];

    sinon.stub(connection, 'execute').resolves(result);
  })

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um array', async () => {
      const products = await productsModel.getAll();

      expect(products).to.be.an('array');
    });
    
    it('é retornado um array populado', async () => {
      const products = await productsModel.getAll();
  
      products.forEach((product) => {
        expect(product).to.be.an('object');
      });
    });
  });  
});

describe('Ao chamar a função update de productsModels', () => {
  before(() => {
    const products = {
      id: 1,
      name: "produto A",
      quantity: 10
    }

    sinon.stub(connection, 'execute').resolves(products);
  })

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um object', async () => {
      const products = await productsModel.updateProducts({ name: "produto A", quantity: 10});

      expect(products).to.be.an('object');
    });
  });  
});

describe('Ao chamar a função createProduct de productsModels', () => {
  const product = {
    name: "Produto A",
    quantity: 10
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um object', async () => {
      const products = await productsModel.createProduct({ ...product });

      expect(products).to.be.an('object');
    });

    it('o objeto possui o "id" do novo produto inserido', async () => {
      const products = await productsModel.createProduct({ ...product });
      console.log(products);
      expect(products).to.have.a.property('id');
    });
  }); 
});

describe('Ao chamar a função deleteProducts de productsModels', () => {
  before(() => {
    sinon.stub(connection, 'execute').resolves();
  })

  after(() => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado vazio', async () => {
       const products = await productsModel.deleteProducts(1);
       
      expect(products);
    });
  });  
});
