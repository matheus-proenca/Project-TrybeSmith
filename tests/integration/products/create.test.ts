import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () { sinon.restore(); });

  it('Produto é criado com sucesso', async function () {
    const response = await chai
      .request(app)
      .post('/products')
      .send({
        name: 'Martelo de Thor',
        price: '30 peças de ouro',
        orderId: 4,
      });

    expect(response.body.name).to.equal('Martelo de Thor');
    expect(response.body.price).to.equal('30 peças de ouro');
    expect(response.status).to.equal(201);
  });
});
