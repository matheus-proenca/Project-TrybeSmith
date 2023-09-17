import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import orderCreateMock from '../../mocks/order'

chai.use(chaiHttp);

describe('POST /orders', function () {
  beforeEach(function () { sinon.restore(); });

  it('Pedido é criado com sucesso', async function () {
    const response = await chai
      .request(app)
      .get('/orders')
      .send();

    expect(response.body).to.be.an('array')
    expect(response.status).to.equal(200);
  });

});
