const sinon = require('sinon');
const { expect } = require('chai');

const productsModel = require('../../../models/productsModels');
const productsService = require('../../../services/productsServices');

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

    sinon.stub(productsModel, 'getAll').resolves(products);
  })

  after(() => {
    productsModel.getAll.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um array', async () => {
      const products = await productsService.getAll();

      expect(products).to.be.an('array');
    });
    
    it('é retornado um array populado', async () => {
      const products = await productsService.getAll();
  
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

    sinon.stub(productsModel, 'updateProducts').resolves(products);
  })

  after(() => {
    productsModel.updateProducts.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um object', async () => {
      const products = await productsService.updateProducts({ name: "produto A", quantity: 10});

      expect(products).to.be.an('object');
    });
  });  
});

describe('Ao chamar a função createProduct de productsModels', () => {
  const product = {
    id: 1,
    name: "Produto A",
    quantity: 10
  };

  before(async () => {
    sinon.stub(productsModel, 'createProduct').resolves(product);
  });

  after(async () => {
    productsModel.createProduct.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um object', async () => {
      const products = await productsService.createProduct({ ...product });

      expect(products).to.be.an('object');
    });

    it('o objeto possui o "id" do novo produto inserido', async () => {
      const products = await productsService.createProduct({ ...product });
      
      expect(products).to.have.a.property('id');
    });
  }); 
});

describe('Ao chamar a função deleteProducts de productsModels', () => {
  before(() => {
    sinon.stub(productsModel, 'deleteProducts').resolves();
  })

  after(() => {
    productsModel.deleteProducts.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado vazio', async () => {
       const products = await productsService.deleteProducts(1);
       
      expect(products);
    });
  });  
});
