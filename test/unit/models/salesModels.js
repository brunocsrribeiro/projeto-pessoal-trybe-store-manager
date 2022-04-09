const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../models/connection');
const salesModel = require('../../../models/salesModels');

describe('Ao chamar a função getAll de salesModels', () => {
  before(() => {
    const sales = [
      {
        saleId: 1,
        date: "2021-09-09T04:54:29.000Z",
        productId: 1,
        quantity: 2
      },
      {
        saleId: 1,
        date: "2021-09-09T04:54:54.000Z",
        productId: 2,
        quantity: 2
      }
    ];

    const result = [sales, []];

    sinon.stub(connection, 'execute').resolves(result);
  })

  after(() => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um array', async () => {
      const sales = await salesModel.getAll();

      expect(sales).to.be.an('array');
    });
    
    it('é retornado um array populado', async () => {
      const sales = await salesModel.getAll();

      sales.forEach((sale) => {
        expect(sale).to.be.an('object');
      });
    });
  });  
});

describe('Ao chamar a função updateSales de salesModels', () => {
  before(() => {
    const sales = {
      saleId: 1,
      itemUpdated: [
        {
          productId: 1,
          quantity: 10
        }
      ]
    }

    sinon.stub(connection, 'execute').resolves(sales);
  })

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um object', async () => {
       const sales = await salesModel.updateSales(1,{ productId: 1, quantity: 10 });
       
      expect(sales).to.be.an('object');
    });
  });  
});

describe('Ao chamar a função findByIdSale de salesModels', () => {
  const sales = {
    id: 1
  };

  before(() => {
    const execute = [{ insertI: 1 }]
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um object', async () => {
       const sales = await salesModel.findByIdSale(1 );
       
      expect(sales).to.be.an('object');
    });
  });  
})

describe('Ao chamar a função deleteSales de salesModel', () => {
  before(() => {
    sinon.stub(connection, 'execute').resolves();
  })

  after(() => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado vazio', async () => {
       const sales = await salesModel.deleteSales(1);
       
      expect(sales);
    });
  });  
});

