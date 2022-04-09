const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/salesServices');
const salesController = require('../../../controllers/salesControllers');

describe('Ao chamar a função getAll de salesControllers', () => {
  const response = {};
  const request = {};
  const next = {};

  before(() => {
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(salesService, 'getAll').resolves(true);
  });

  after(() => {
    salesService.getAll.restore();
  });

  describe('quando o payload informado e válido', () => {
    it('é chamado o status com o código 200 - OK', async () => {
      await salesController.getAll(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});

describe('Ao chamar a função getSalesById de salesControllers', () => {
  describe('quando o payload informado é válido', () => {
      const response = {};
      const request = {};
      const next = {};

      before(() => {
        request.params = {
          id: 1
        };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(salesService, 'getSalesById').resolves(true);
      });

      after(() => {
        salesService.getSalesById.restore();
      });

      it('é chamado o status com o código 200 - OK', async () => {
        await salesController.getSalesById(request, response, next);

        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  });

  describe('quando o payload informado é inválido', () => {
    const response = {};
    const request = {};
    const next = {};

    before(() => {
      request.params = {
        id: 1
      };
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, 'getSalesById').resolves(false);
    });
  
    after(() => {
      salesService.getSalesById.restore();
    });

    it('o json retorna a mensagem "Sale not found".', async () => {
      await salesController.getSalesById(request, response, next);

      expect(response.json.calledWith({ message: "Sale not found" })).to.be.equal(false);
    });
  });
});

describe('Ao chamar a função createSales de salesControllers', () => {
  describe('quando o payload informado é válido', () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {
          productId: 1,
          quantity: 15,
        };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(salesService, 'createSales').resolves(true);
      });

      after(() => {
        salesService.createSales.restore();
      });

      it('é chamado o status com o código 201 - CREATED', async () => {
        await salesController.createSales(request, response);

        expect(response.status.calledWith(201)).to.be.equal(true);
      });
  });
});

describe('Ao chamar a função deleteSales de salesControllers', () => {
  const response = {};
  const request = {};
  const next = {};

  before(() => {
    request.params = {
      id: 1
    };
    
    response.status = sinon.stub().returns(response);
    response.end = sinon.stub().returns();
    sinon.stub(salesService, 'deleteSales').resolves(true);
  });

  after(() => {
    salesService.deleteSales.restore();
  });

  describe('quando o payload informado e válido', () => {
    it('é chamado o status com o código 204 - NO_CONTENT', async () => {
      await salesController.deleteSales(request, response, next);

      expect(response.status.calledWith(204)).to.be.equal(true);
    });
  });
});