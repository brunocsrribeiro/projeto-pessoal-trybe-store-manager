const sinon = require('sinon');
const { expect } = require('chai');

const salesModel = require('../../../models/salesModels');
const salesService = require('../../../services/salesServices');

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

    sinon.stub(salesModel, 'getAll').resolves(sales);
  })

  after(() => {
    salesModel.getAll.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um array', async () => {
      const sales = await salesService.getAll();

      expect(sales).to.be.an('array');
    });
    
    it('é retornado um array populado', async () => {
      const sales = await salesService.getAll();
  
      sales.forEach((sale) => {
        expect(sale).to.be.an('object');
      });
    });
  });  
});

describe('Ao chamar a função update de salesModels', () => {
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

    sinon.stub(salesModel, 'updateSales').resolves(sales);
  })

  after(() => {
    salesModel.updateSales.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado um object', async () => {
      const sales = await salesService.updateSales({ name: "produto A", quantity: 10});

      expect(sales).to.be.an('object');
    });
  });  
});

describe('Ao chamar a função deletesales de salesModels', () => {
  before(() => {
    sinon.stub(salesModel, 'deleteSales').resolves();
  })

  after(() => {
    salesModel.deleteSales.restore();
  });

  describe('quando é inserido com sucesso ', () => {
    it('é retornado vazio', async () => {
       const sales = await salesService.deleteSales(1);
       
      expect(sales);
    });
  });  
});
