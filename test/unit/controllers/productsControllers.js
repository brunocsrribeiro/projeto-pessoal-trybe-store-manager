const sinon = require('sinon');
const { expect } = require('chai');

const productsService = require('../../../services/productsServices');
const productsController = require('../../../controllers/productsControllers');

describe('Ao chamar a função getAll de productsControllers', () => {
  const response = {};
  const request = {};
  const next = {};

  before(() => {
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAll').resolves(true);
  });

  after(() => {
    productsService.getAll.restore();
  });

  describe('quando o payload informado e válido', () => {
    it('é chamado o status com o código 200 - OK', async () => {
      await productsController.getAll(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});

describe('Ao chamar a função getProductById de productsControllers', () => {
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
        sinon.stub(productsService, 'getProductById').resolves(true);
      });

      after(() => {
        productsService.getProductById.restore();
      });

      it('é chamado o status com o código 200 - OK', async () => {
        await productsController.getProductById(request, response, next);

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
      sinon.stub(productsService, 'getProductById').resolves(false);
    });
  
    after(() => {
      productsService.getProductById.restore();
    });
    it('é chamado o json retorna a mensagem "Product not found".', async () => {
      await productsController.getProductById(request, response, next);

      expect(response.json.calledWith({ message: "Product not found" })).to.be.equal(false);
    });
  });
});

describe('Ao chamar a função createProduct de productsControllers', () => {
  describe('quando o payload informado é válido', () => {
      const response = {};
      const request = {};
      const next = {};

      before(() => {
        request.body = {
          name: "Produto A",
          quantity: 10,
        };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(productsService, 'createProduct').resolves(true);
      });

      after(() => {
        productsService.createProduct.restore();
      });

      it('é chamado o status com o código 201 - CREATED', async () => {
        await productsController.createProduct(request, response, next);

        expect(response.status.calledWith(201)).to.be.equal(true);
      });
  });

  describe('quando o payload informado é inválido', () => {
    const response = {};
    const request = {};
    const next = {};

    before(() => {
      request.body = {
        name: "Produto A",
        quantity: 10,
      };
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'createProduct').resolves(false);
    });
  
    after(() => {
      productsService.createProduct.restore();
    });
    it('é chamado o json retorna a mensagem "Product already exists".', async () => {
      await productsController.createProduct(request, response, next);

      expect(response.json.calledWith({ message: "Product already exists" })).to.be.equal(false);
    });
  });
});

describe('Ao chamar a função deleteProducts de productsControllers', () => {
  const response = {};
  const request = {};
  const next = {};

  before(() => {
    request.params = {
      id: 1
    };

    response.status = sinon.stub().returns(response);
    response.end = sinon.stub().returns();
    sinon.stub(productsService, 'deleteProducts').resolves(true);
  });

  after(() => {
    productsService.deleteProducts.restore();
  });

  describe('quando o payload informado e válido', () => {
    it('é chamado o status com o código 204 - NO_CONTENT', async () => {
      await productsController.deleteProducts(request, response, next);

      expect(response.status.calledWith(204)).to.be.equal(true);
    });
  });
});
